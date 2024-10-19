import { v2 } from '@google-cloud/translate';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const keyFilename = path.join(__dirname, '..', 'valued-crow-280207-d0020a2d6cd5.json');

const translate = new v2.Translate({
  keyFilename: keyFilename,
});

const sourceLanguage = 'en';
const targetLanguages = ['es', 'fr', 'de'];

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

async function translateBlogPosts() {
  const blogPostsPath = path.join(__dirname, '..', 'src', 'data', 'blogPosts.ts');
  const blogPostsContent = await fs.readFile(blogPostsPath, 'utf-8');
  
  // Extract the blogPosts array from the file content
  const blogPostsMatch = blogPostsContent.match(/const blogPosts: BlogPost\[] = (\[[\s\S]*?\]);/);
  if (!blogPostsMatch) {
    console.error('Unable to find blogPosts array in the file.');
    return;
  }
  
  const blogPostsArray = eval(blogPostsMatch[1]);

  for (const targetLang of targetLanguages) {
    const translatedBlogPosts = [];

    for (const post of blogPostsArray) {
      const translatedPost = {
        ...post,
        title: (await translate.translate(post.title, targetLang))[0],
        excerpt: (await translate.translate(post.excerpt, targetLang))[0],
        content: (await translate.translate(post.content, targetLang))[0],
      };
      translatedBlogPosts.push(translatedPost);
    }

    const targetPath = path.join(__dirname, '..', 'src', 'data', `blogPosts.${targetLang}.ts`);
    const translatedContent = `import { BlogPost } from '../types';\n\nconst blogPosts: BlogPost[] = ${JSON.stringify(translatedBlogPosts, null, 2)};\n\nexport default blogPosts;`;
    await fs.writeFile(targetPath, translatedContent, 'utf-8');

    console.log(`Translated blog posts to ${targetLang}`);
  }
}

async function updateSitemap() {
  const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
  const blogPostsPath = path.join(__dirname, '..', 'src', 'data', 'blogPosts.ts');
  
  const blogPostsContent = await fs.readFile(blogPostsPath, 'utf-8');
  const blogPostsMatch = blogPostsContent.match(/const blogPosts: BlogPost\[] = (\[[\s\S]*?\]);/);
  if (!blogPostsMatch) {
    console.error('Unable to find blogPosts array in the file.');
    return;
  }
  
  const blogPosts = eval(blogPostsMatch[1]);

  const blogUrls = blogPosts.map(post => `
  <url>
    <loc>https://www.pantonecolors.net/blog/${post.slug}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`).join('');

  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.pantonecolors.net/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://www.pantonecolors.net/blog</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>${blogUrls}
  <url>
    <loc>https://www.pantonecolors.net/privacy</loc>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>https://www.pantonecolors.net/terms</loc>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
</urlset>`;

  await fs.writeFile(sitemapPath, sitemapContent, 'utf-8');
  console.log('Sitemap updated');
}

async function main() {
  await translateBlogPosts();
  await updateSitemap();
}

main().catch(console.error);