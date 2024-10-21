const fs = require('fs');
const path = require('path');
const { Translate } = require('@google-cloud/translate').v2;

// Initialize the Google Translate API client
const translate = new Translate({
  keyFilename: path.join(__dirname, '..', 'valued-crow-280207-9e053c159b3a.json'),
});

const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'es', 'fr', 'de', 'it'],
};

async function translateText(text, targetLanguage) {
  try {
    const [translation] = await translate.translate(text, targetLanguage);
    return translation;
  } catch (error) {
    console.error(`Error translating text to ${targetLanguage}:`, error);
    return text;
  }
}

async function translateBlogPosts() {
  // ... (keep existing blog post translation logic)
}

async function translatePages() {
  // ... (keep existing page translation logic)
}

async function translateUIStrings() {
  const translationsPath = path.join(__dirname, '..', 'lib', 'translations.ts');
  const translationsContent = fs.readFileSync(translationsPath, 'utf-8');

  const translationsMatch = translationsContent.match(/export const translations = ({[\s\S]*?});/);

  if (!translationsMatch) {
    console.error('Could not find translations object in translations.ts');
    return;
  }

  let translations;
  try {
    translations = eval(`(${translationsMatch[1]})`);
  } catch (error) {
    console.error('Error parsing translations:', error);
    return;
  }

  const englishStrings = translations.en;
  if (!englishStrings) {
    console.error('Could not find English strings in translations object');
    return;
  }

  for (const lang of i18n.locales) {
    if (lang === 'en') continue;

    translations[lang] = translations[lang] || {};
    for (const [key, value] of Object.entries(englishStrings)) {
      if (!translations[lang][key]) {
        translations[lang][key] = await translateText(value, lang);
      }
    }
  }

  const updatedTranslationsContent = `export const translations = ${JSON.stringify(translations, null, 2)};

export type TranslationKey = keyof typeof translations.en;

export function getTranslation(lang: string, key: TranslationKey): string {
  return translations[lang as keyof typeof translations]?.[key] || translations.en[key];
}`;

  fs.writeFileSync(translationsPath, updatedTranslationsContent);
  console.log('UI strings translated and updated.');
}

async function updateSitemap() {
  // ... (keep existing sitemap update logic)
}

async function main() {
  await translateBlogPosts();
  await translatePages();
  await translateUIStrings();
  await updateSitemap();
  console.log('Translation and sitemap update completed.');
}

main().catch(console.error);