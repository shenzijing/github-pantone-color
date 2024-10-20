import { getBlogPosts } from '@/lib/blog';
import { i18n } from '@/lib/i18n';

export default async function sitemap() {
  const baseUrl = 'https://your-domain.com';
  const blogPosts = getBlogPosts();

  const routes = ['', '/blog'].flatMap((route) =>
    i18n.locales.map((lang) => ({
      url: `${baseUrl}/${lang}${route}`,
<<<<<<< HEAD
      lastModified: new Date('2024-10-20T08:15:02.237Z').toISOString(),
=======
      lastModified: new Date().toISOString(),
>>>>>>> parent of c3663b2 (多语言)
    }))
  );

  const blogRoutes = blogPosts.flatMap((post) =>
    i18n.locales.map((lang) => ({
      url: `${baseUrl}/${lang}/blog/${post.slug}`,
<<<<<<< HEAD
      lastModified: new Date('2024-10-20T08:15:02.237Z').toISOString(),
=======
      lastModified: new Date().toISOString(),
>>>>>>> parent of c3663b2 (多语言)
    }))
  );

  return [...routes, ...blogRoutes];
}