import Link from 'next/link';
import { getBlogPosts } from '@/lib/blog';

export default function BlogPage() {
  const blogPosts = getBlogPosts();

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Blog sur les couleurs</h1>
      <div className="space-y-12">
        {blogPosts.map((post) => (
          <article key={post.slug} className="border-b pb-8">
            <h2 className="text-2xl font-semibold mb-2">
              <Link href={`/blog/${post.slug}`} className="hover:text-blue-600 transition-colors">
                {post.title}
              </Link>
            </h2>
            <p className="text-gray-600 mb-4">{post.date}</p>
            <p className="text-gray-800 leading-relaxed mb-4">{post.excerpt}</p>
            <Link href={`/blog/${post.slug}`} className="text-blue-600 hover:underline">
              En savoir plus
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}