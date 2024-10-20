import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { BlogPost as BlogPostType } from '../types';

interface BlogPostProps {
  post: BlogPostType;
}

const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
  const { t } = useTranslation('common');

  // Remove the first <h1> tag and its content from the post content
  const contentWithoutFirstH1 = post.content.replace(/<h1>.*?<\/h1>/, '');

  return (
    <div className="max-w-4xl mx-auto">
      <Link href="/blog" className="text-blue-500 hover:text-blue-600 mb-4 inline-block">
        &larr; {t('backToBlog')}
      </Link>
      <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
      <p className="text-gray-500 mb-8">{post.date}</p>
      <div className="prose lg:prose-xl" dangerouslySetInnerHTML={{ __html: contentWithoutFirstH1 }}></div>
    </div>
  );
};

export default BlogPost;