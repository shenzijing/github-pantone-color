const fs = require('fs');
const path = require('path');
const { Translate } = require('@google-cloud/translate').v2;

// Initialize the Google Translate API client
const translate = new Translate({
  keyFilename: path.join(__dirname, '..', 'valued-crow-280207-d0020a2d6cd5.json'),
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

async function translateObject(obj, targetLanguage) {
  const translatedObj = {};
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === 'string') {
      translatedObj[key] = await translateText(value, targetLanguage);
    } else if (Array.isArray(value)) {
      translatedObj[key] = await Promise.all(value.map(item => translateObject(item, targetLanguage)));
    } else if (typeof value === 'object') {
      translatedObj[key] = await translateObject(value, targetLanguage);
    } else {
      translatedObj[key] = value;
    }
  }
  return translatedObj;
}

async function translateDictionaries() {
  const enDictPath = path.join(__dirname, '..', 'dictionaries', 'en.json');
  const enDict = JSON.parse(fs.readFileSync(enDictPath, 'utf-8'));

  for (const lang of i18n.locales) {
    if (lang === 'en') continue;

    const translatedDict = await translateObject(enDict, lang);
    const langDictPath = path.join(__dirname, '..', 'dictionaries', `${lang}.json`);
    fs.writeFileSync(langDictPath, JSON.stringify(translatedDict, null, 2));
    console.log(`Translated dictionary for ${lang}`);
  }
}

async function main() {
  await translateDictionaries();
  console.log('Translation completed.');
}

main().catch(console.error);