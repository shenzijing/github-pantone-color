import { notFound } from 'next/navigation';
<<<<<<< HEAD
import { getTranslatedBlogPost, getBlogPosts } from '@/lib/blog';
=======
import { getTranslatedBlogPost } from '@/lib/blog';
>>>>>>> 7cde95fd5fb83df98a42d6f40fbb37756b0a7ac0
import { i18n } from '@/lib/i18n';

export async function generateStaticParams() {
  const { locales } = i18n;
  const posts = getBlogPosts();
  return locales.flatMap((lang) =>
    posts.map((post) => ({
      lang,
      slug: post.slug,
    }))
  );
}

export default function BlogPost({ params }: { params: { lang: string; slug: string } }) {
  const post = getTranslatedBlogPost(params.slug, params.lang);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-600 mb-4">{post.date}</p>
      <div className="prose lg:prose-xl" dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  );
}