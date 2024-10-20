import Link from 'next/link'
import { getBlogPosts } from '@/lib/blog'

export default function BlogList() {
  const posts = getBlogPosts()

  return (
    <div className="space-y-8">
      {posts.map(post => (
        <div key={post.id} className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
          <p className="text-gray-600 mb-4">{post.excerpt}</p>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">{post.date}</span>
            <Link href={`/blog/${post.slug}`} className="text-blue-500 hover:text-blue-600">Read more</Link>
          </div>
        </div>
      ))}
    </div>
  )
}