const fs = require('fs');
const path = require('path');
const { Translate } = require('@google-cloud/translate').v2;
const cheerio = require('cheerio');

// Initialize the Google Translate API client
const translate = new Translate({
  keyFilename: path.join(__dirname, '..', 'valued-crow-280207-9e053c159b3a.json'),
});

const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'es', 'fr', 'de', 'it'],
};

async function translateText(text, targetLanguage, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const [translation] = await translate.translate(text, targetLanguage);
      return translation;
    } catch (error) {
      console.error(`Error translating text to ${targetLanguage} (attempt ${i + 1}):`, error);
      if (i === retries - 1) {
        console.error('Max retries reached. Returning original text.');
        return text;
      }
      // Wait for a short time before retrying
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
}

async function translateHtml(html, targetLanguage) {
  const $ = cheerio.load(html);

  async function translateElement(element) {
    if (element.children().length === 0) {
      const text = $(element).text().trim();
      if (text) {
        const translatedText = await translateText(text, targetLanguage);
        $(element).text(translatedText);
      }
    } else {
      for (let child of element.contents()) {
        if (child.type === 'text') {
          const text = $(child).text().trim();
          if (text) {
            const translatedText = await translateText(text, targetLanguage);
            $(child).replaceWith(translatedText);
          }
        } else if (child.type === 'tag') {
          await translateElement($(child));
        }
      }
    }
  }

  await translateElement($('body'));
  return $('body').html();
}

async function translateBlogPosts() {
  const blogPostsPath = path.join(__dirname, '..', 'lib', 'blog.ts');
  const blogPostsContent = fs.readFileSync(blogPostsPath, 'utf-8');

  const blogPostsMatch = blogPostsContent.match(/const blogPosts: BlogPost\[] = \[([\s\S]*?)\];/);

  if (!blogPostsMatch) {
    console.error('Could not find blogPosts array in blog.ts');
    return;
  }

  let blogPosts;
  try {
    blogPosts = eval(`[${blogPostsMatch[1]}]`);
  } catch (error) {
    console.error('Error parsing blogPosts:', error);
    return;
  }

  for (const post of blogPosts) {
    for (const lang of i18n.locales) {
      if (lang === 'en') continue;

      if (!post.translations[lang]) {
        post.translations[lang] = {};
      }

      post.translations[lang].title = await translateText(post.title, lang);
      post.translations[lang].excerpt = await translateText(post.excerpt, lang);
      post.translations[lang].content = await translateHtml(post.content, lang);
    }
  }

  const updatedBlogPostsContent = blogPostsContent.replace(
    /const blogPosts: BlogPost\[] = \[([\s\S]*?)\];/,
    `const blogPosts: BlogPost[] = ${JSON.stringify(blogPosts, null, 2)};`
  );

  fs.writeFileSync(blogPostsPath, updatedBlogPostsContent);
  console.log('Blog posts translated and updated.');
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

  // 确保 TranslationKey 类型被正确更新
  const updatedTranslationsContent = `export const translations = ${JSON.stringify(translations, null, 2)};

export type TranslationKey = keyof typeof translations.en;

export function getTranslation(lang: string, key: TranslationKey): string {
  return translations[lang as keyof typeof translations]?.[key] || translations.en[key];
}`;

  fs.writeFileSync(translationsPath, updatedTranslationsContent);
  console.log('UI strings translated and updated.');
}

async function main() {
  await translateBlogPosts();
  await translateUIStrings();
  console.log('Translation completed.');
}

main().catch(console.error);