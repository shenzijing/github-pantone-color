import Link from 'next/link';
import { getBlogPosts } from '@/lib/blog';
import { i18n } from '@/lib/i18n';
import { useTranslation } from '@/hooks/useTranslation';

export function generateStaticParams() {
  return i18n.locales.map((lang) => ({ lang }));
}

export default function BlogPage({ params }: { params: { lang: string } }) {
  const blogPosts = getBlogPosts();
  const { t } = useTranslation();

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">{t('colorInsightsBlog')}</h1>
      <div className="space-y-12">
        {blogPosts.map((post) => {
          const translatedPost = post.translations[params.lang] || post;
          return (
            <article key={post.slug} className="border-b pb-8">
              <h2 className="text-2xl font-semibold mb-2">
                <Link href={`/${params.lang}/blog/${post.slug}`} className="hover:text-blue-600 transition-colors">
                  {translatedPost.title}
                </Link>
              </h2>
              <p className="text-gray-600 mb-4">{post.date}</p>
              <p className="text-gray-800 leading-relaxed mb-4">{translatedPost.excerpt}</p>
              <Link href={`/${params.lang}/blog/${post.slug}`} className="text-blue-600 hover:underline">
                {t('readMore') as string}
              </Link>
            </article>
          );
        })}
      </div>
    </div>
  );
}