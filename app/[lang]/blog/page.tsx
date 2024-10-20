import Link from 'next/link';
import { getBlogPosts } from '@/lib/blog';
import { i18n } from '@/lib/i18n';

export function generateStaticParams() {
  return i18n.locales.map((lang) => ({ lang }));
}

export default function BlogPage({ params }: { params: { lang: string } }) {
  const blogPosts = getBlogPosts();

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Color Insights Blog</h1>
      <div className="space-y-12">
        {blogPosts.map((post) => (
          <article key={post.slug} className="border-b pb-8">
            <h2 className="text-2xl font-semibold mb-2">
              <Link href={`/${params.lang}/blog/${post.slug}`} className="hover:text-blue-600 transition-colors">
                {post.title}
              </Link>
            </h2>
            <p className="text-gray-600 mb-4">{post.date}</p>
            <p className="text-gray-800 leading-relaxed mb-4">{post.excerpt}</p>
            <Link href={`/${params.lang}/blog/${post.slug}`} className="text-blue-600 hover:underline">
              Read more
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}