import { notFound } from 'next/navigation';
import { getTranslatedBlogPost, getBlogPosts } from '@/lib/blog';
import { Metadata } from 'next';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getTranslatedBlogPost(params.slug, 'en');

  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: ['Pantone Colors Team'],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
  };
}

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getTranslatedBlogPost(params.slug, 'en');

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

// This ensures the page is statically generated
export const dynamic = 'force-static';