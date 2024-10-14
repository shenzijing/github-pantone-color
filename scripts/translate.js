require('dotenv').config();
const { Translate } = require('@google-cloud/translate').v2;
const fs = require('fs').promises;
const path = require('path');

// 配置Google Cloud认证
const translate = new Translate({
  projectId: process.env.GOOGLE_CLOUD_PROJECT_ID,
  credentials: {
    client_email: process.env.GOOGLE_CLOUD_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_CLOUD_PRIVATE_KEY.replace(/\\n/g, '\n'),
  },
});

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