import { BlogPost } from './types'

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Pantone Unveils 2024 Color of the Year: Peach Fuzz",
    slug: "pantone-2024-color-of-the-year-peach-fuzz",
    excerpt: "Discover the significance of Pantone's 2024 Color of the Year, Peach Fuzz, and its impact on design trends.",
    content: `<p>The new year brings fresh trends, and one of the biggest announcements in design is the Pantone Color of the Year 2024. This year, the color authority has chosen PANTONE 13-1023 Peach Fuzz, a soft, warm peach shade that aims to bring a sense of comfort, cheerfulness, and well-being into homes, fashion, and everyday life.</p>`,
    date: "2024-10-15"
  },
  {
    id: 2,
    title: "How to Find Pantone Color: A Step-by-Step Guide",
    slug: "how-to-find-pantone-color",
    excerpt: "Learn how to effectively find and use Pantone colors in your design projects with this comprehensive guide.",
    content: `<p>Finding the perfect Pantone color for your design projects can be crucial for maintaining brand consistency and ensuring accurate color reproduction across various media. This guide will walk you through several methods to find and use Pantone colors effectively in your design workflow.</p>`,
    date: "2024-10-15"
  },
  // Add more blog posts as needed
]

export function getBlogPosts(): BlogPost[] {
  return blogPosts
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug)
}