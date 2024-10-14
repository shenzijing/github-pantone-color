import { Translate } from '@google-cloud/translate/build/src/v2';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { readFileSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const projectId = import.meta.env.VITE_GOOGLE_CLOUD_PROJECT_ID;
const keyFilename = import.meta.env.VITE_GOOGLE_APPLICATION_CREDENTIALS;

const translate = new Translate({ projectId, keyFilename });

const sourceLanguage = 'en';
const targetLanguages = ['es', 'fr', 'de', 'zh'];

async function translateJSON(jsonContent, targetLang) {
  const translatedContent = {};

  for (const [key, value] of Object.entries(jsonContent)) {
    if (typeof value === 'string') {
      const [translation] = await translate.translate(value, targetLang);
      translatedContent[key] = translation;
    } else if (typeof value === 'object') {
      translatedContent[key] = await translateJSON(value, targetLang);
    } else {
      translatedContent[key] = value;
    }
  }

  return translatedContent;
}

async function translateFiles() {
  const sourceDir = path.join(process.cwd(), 'public', 'locales', sourceLanguage);
  const files = await fs.readdir(sourceDir);

  for (const file of files) {
    if (path.extname(file) === '.json') {
      const sourceContent = JSON.parse(await fs.readFile(path.join(sourceDir, file), 'utf-8'));

      for (const targetLang of targetLanguages) {
        const targetDir = path.join(process.cwd(), 'public', 'locales', targetLang);
        await fs.mkdir(targetDir, { recursive: true });

        const translatedContent = await translateJSON(sourceContent, targetLang);
        await fs.writeFile(
          path.join(targetDir, file),
          JSON.stringify(translatedContent, null, 2),
          'utf-8'
        );

        console.log(`Translated ${file} to ${targetLang}`);
      }
    }
  }
}

translateFiles().catch(console.error);
