import { getBlogPost } from '@/lib/blog'
import BlogPost from '@/components/BlogPost'

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)

  if (!post) {
    return <div>Post not found</div>
  }

  return <BlogPost post={post} />
}