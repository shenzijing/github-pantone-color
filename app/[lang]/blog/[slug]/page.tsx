import { notFound } from 'next/navigation';
import { getTranslatedBlogPost, getBlogPosts } from '@/lib/blog';
import { i18n } from '@/lib/i18n';
import { Metadata } from 'next';

type Props = {
  params: { lang: string; slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getTranslatedBlogPost(params.slug, params.lang);

  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.',
    };
  }

  const title = post.translations?.[params.lang]?.title || post.title;
  const excerpt = post.translations?.[params.lang]?.excerpt || post.excerpt;

  return {
    title: title,
    description: excerpt,
    openGraph: {
      title: title,
      description: excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: ['Pantone Colors Team'],
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: excerpt,
    },
  };
}

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return i18n.locales.flatMap((lang) =>
    posts.map((post) => ({
      lang,
      slug: post.slug,
    }))
  );
}

export default function BlogPost({ params }: Props) {
  const post = getTranslatedBlogPost(params.slug, params.lang);

  if (!post) {
    notFound();
  }

  const title = post.translations?.[params.lang]?.title || post.title;
  const content = post.translations?.[params.lang]?.content || post.content;

  return (
    <article className="max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p className="text-gray-600 mb-4">{post.date}</p>
      <div className="prose lg:prose-xl" dangerouslySetInnerHTML={{ __html: content }} />
    </article>
  );
}

export const dynamic = 'force-static';