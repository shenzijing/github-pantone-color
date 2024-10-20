import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import blogPosts from '../data/blogPosts';

const Blog: React.FC = () => {
  const { t } = useTranslation('common');

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">{t('blog')}</h1>
      <div className="space-y-8">
        {blogPosts.map(post => (
          <div key={post.id} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">{post.date}</span>
              <Link href={`/blog/${post.slug}`} className="text-blue-500 hover:text-blue-600">
                {t('readMore')}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;