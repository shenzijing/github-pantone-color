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
        post.translations[lang] = {
          title: await translateText(post.title, lang),
          excerpt: await translateText(post.excerpt, lang),
          content: await translateText(post.content, lang),
        };
      }
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
  // ... (keep existing UI strings translation logic)
}

async function main() {
  await translateBlogPosts();
  await translateUIStrings();
  console.log('Translation completed.');
}

main().catch(console.error);