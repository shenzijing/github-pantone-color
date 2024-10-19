import React from 'react';
import { useParams, Link } from 'react-router-dom';
import blogPosts from '../data/blogPosts';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(post => post.slug === slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  // 移除文章内容中的第一个 <h1> 标签及其内容
  const contentWithoutFirstH1 = post.content.replace(/<h1>.*?<\/h1>/, '');

  return (
    <div className="max-w-4xl mx-auto">
      <Link to="/blog" className="text-blue-500 hover:text-blue-600 mb-4 inline-block">&larr; Back to Blog</Link>
      <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
      <p className="text-gray-500 mb-8">{post.date}</p>
      <div className="prose lg:prose-xl" dangerouslySetInnerHTML={{ __html: contentWithoutFirstH1 }}></div>
    </div>
  );
};

export default BlogPost;