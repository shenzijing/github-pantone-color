interface BlogPost {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  content: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "The Psychology of Color in Design",
    slug: "psychology-of-color-in-design",
    date: "June 1, 2023",
    excerpt: "Colors play a crucial role in how we perceive and interact with designs. In this post, we explore the psychological impacts of different colors and how to use them effectively in your projects.",
    content: `
      <p>Colors have a profound impact on our emotions and behaviors. In the world of design, understanding color psychology is crucial for creating effective and engaging experiences. Let's explore some key aspects of color psychology in design:</p>
      
      <h2>Emotional Associations</h2>
      <p>Different colors evoke different emotions and associations. For example:</p>
      <ul>
        <li><strong>Red</strong>: Excitement, passion, urgency</li>
        <li><strong>Blue</strong>: Trust, calmness, stability</li>
        <li><strong>Green</strong>: Nature, growth, harmony</li>
        <li><strong>Yellow</strong>: Happiness, optimism, energy</li>
        <li><strong>Purple</strong>: Luxury, creativity, mystery</li>
      </ul>

      <h2>Cultural Considerations</h2>
      <p>It's important to note that color associations can vary across cultures. What might be positive in one culture could be negative in another. Always research your target audience's cultural context when choosing colors for global designs.</p>

      <h2>Practical Applications</h2>
      <p>Understanding color psychology can help in various design scenarios:</p>
      <ul>
        <li><strong>Branding</strong>: Choose colors that align with your brand personality and values.</li>
        <li><strong>User Interface Design</strong>: Use colors to guide users' attention and actions.</li>
        <li><strong>Marketing</strong>: Select colors that resonate with your target audience and campaign goals.</li>
      </ul>

      <p>By leveraging the power of color psychology, designers can create more impactful and effective designs that resonate with their audience on a deeper level.</p>
    `,
  },
  // Add more blog posts here...
];

export function getBlogPosts(): BlogPost[] {
  return blogPosts;
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}