import Link from 'next/link'
import { BlogPost } from '@/lib/types'

export default function BlogPost({ post }: { post: BlogPost }) {
  return (
    <div className="max-w-4xl mx-auto">
      <Link href="/blog" className="text-blue-500 hover:text-blue-600 mb-4 inline-block">&larr; Back to Blog</Link>
      <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
      <p className="text-gray-500 mb-8">{post.date}</p>
      <div className="prose lg:prose-xl" dangerouslySetInnerHTML={{ __html: post.content }}></div>
    </div>
  )
}