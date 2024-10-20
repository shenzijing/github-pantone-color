import { getBlogPosts } from '@/lib/blog';
import { i18n } from '@/lib/i18n';

export default async function sitemap() {
  const baseUrl = 'https://your-domain.com';
  const blogPosts = getBlogPosts();

  const routes = ['', '/blog'].flatMap((route) =>
    i18n.locales.map((lang) => ({
      url: `${baseUrl}/${lang}${route}`,
      lastModified: new Date().toISOString(),
    }))
  );

  const blogRoutes = blogPosts.flatMap((post) =>
    i18n.locales.map((lang) => ({
      url: `${baseUrl}/${lang}/blog/${post.slug}`,
      lastModified: new Date().toISOString(),
    }))
  );

  return [...routes, ...blogRoutes];
}