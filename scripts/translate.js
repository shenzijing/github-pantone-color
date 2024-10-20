const fs = require('fs');
const path = require('path');
const { Translate } = require('@google-cloud/translate').v2;

// Initialize the Google Translate API client
const translate = new Translate({
  keyFilename: path.join(__dirname, '..', 'google-translate-api-key.json'),
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
  const blogPath = path.join(__dirname, '..', 'lib', 'blog.ts');
  const blogContent = fs.readFileSync(blogPath, 'utf-8');
  
  // Parse the blog posts from the file content
  const blogPostsMatch = blogContent.match(/const blogPosts: BlogPost\[] = \[([\s\S]*?)\];/);
  if (!blogPostsMatch) {
    console.error('Could not find blog posts in the file.');
    return;
  }

  const blogPostsString = blogPostsMatch[1];
  const blogPosts = eval(`[${blogPostsString}]`);

  for (const post of blogPosts) {
    post.translations = post.translations || {};
    for (const lang of i18n.locales) {
      if (lang !== 'en' && !post.translations[lang]) {
        post.translations[lang] = {
          title: await translateText(post.title, lang),
          excerpt: await translateText(post.excerpt, lang),
          content: await translateText(post.content, lang),
        };
      }
    }
  }

  // Update the blog.ts file with translated content
  const updatedBlogContent = blogContent.replace(
    /const blogPosts: BlogPost\[] = \[([\s\S]*?)\];/,
    `const blogPosts: BlogPost[] = ${JSON.stringify(blogPosts, null, 2)};`
  );

  fs.writeFileSync(blogPath, updatedBlogContent);
  console.log('Blog posts translated and updated.');
}

async function translatePages() {
  const pagesDir = path.join(__dirname, '..', 'app');
  const pages = ['page.tsx', 'blog/page.tsx', 'privacy-policy/page.tsx', 'terms-of-service/page.tsx'];

  for (const page of pages) {
    const pagePath = path.join(pagesDir, page);
    const pageContent = fs.readFileSync(pagePath, 'utf-8');

    // Extract text content from the page
    const textMatches = pageContent.match(/<[^>]*>([^<]*)<\/[^>]*>/g);
    if (!textMatches) continue;

    const translatedContent = {};

    for (const lang of i18n.locales) {
      if (lang === 'en') continue;

      translatedContent[lang] = await Promise.all(
        textMatches.map(async (match) => {
          const text = match.replace(/<[^>]*>/g, '').trim();
          if (!text) return match;
          const translated = await translateText(text, lang);
          return match.replace(text, translated);
        })
      );
    }

    // Create language-specific pages
    for (const lang of i18n.locales) {
      if (lang === 'en') continue;

      const langPageDir = path.join(pagesDir, lang, path.dirname(page));
      fs.mkdirSync(langPageDir, { recursive: true });

      let langPageContent = pageContent;
      translatedContent[lang].forEach((translated, index) => {
        langPageContent = langPageContent.replace(textMatches[index], translated);
      });

      fs.writeFileSync(path.join(langPageDir, path.basename(page)), langPageContent);
    }

    console.log(`Translated and created language-specific pages for ${page}`);
  }
}

async function updateSitemap() {
  const sitemapPath = path.join(__dirname, '..', 'app', 'sitemap.ts');
  const sitemapContent = fs.readFileSync(sitemapPath, 'utf-8');

  // Update the lastModified date in the sitemap
  const updatedSitemapContent = sitemapContent.replace(
    /lastModified: new Date\([^)]*\)/g,
    `lastModified: new Date('${new Date().toISOString()}')`
  );

  fs.writeFileSync(sitemapPath, updatedSitemapContent);
  console.log('Sitemap updated with new lastModified date.');
}

async function main() {
  await translateBlogPosts();
  await translatePages();
  await updateSitemap();
  console.log('Translation and sitemap update completed.');
}

main().catch(console.error);