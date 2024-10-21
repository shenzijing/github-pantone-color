import { i18n } from '@/lib/i18n';

export interface BlogPost {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  content: string;
  translations: {
    [key: string]: {
      title: string;
      excerpt: string;
      content: string;
    }
  };
}

const blogPosts: BlogPost[] = [
  {
    "title": "Pantone Unveils 2024 Color of the Year: Peach Fuzz",
    "slug": "pantone-unveils-2024-color-of-the-year-peach-fuzz",
    "date": "2024-10-15",
    "excerpt": "Discover Pantone's Color of the Year for 2024: Peach Fuzz. Learn about its significance and how brands are incorporating this warm, comforting hue into their designs.",
    "content": `
      <h1 class="text-3xl font-bold mb-4">Pantone Unveils 2024 Color of the Year: Peach Fuzz</h1>

      <p class="mb-6">The new year brings fresh trends, and one of the biggest announcements in design is the Pantone Color of the Year 2024. This year, the color authority has chosen <strong>PANTONE 13-1023 Peach Fuzz</strong>, a soft, warm peach shade that aims to bring a sense of comfort, cheerfulness, and well-being into homes, fashion, and everyday life.</p>

      <h2 class="text-2xl font-semibold mb-3">Peach Fuzz: A Color for Connection and Positivity</h2>
      <p class="mb-4">Peach Fuzz is more than just a shade—it's meant to encourage connection and a positive outlook. With its gentle, soothing tone, this peach hue is ideal for creating inviting spaces and a calm environment, whether through interior design or personal style. The color reflects the ongoing trend of embracing warmth and simplicity in today's fast-paced world.</p>

      <div class="bg-orange-100 p-4 rounded-lg mb-6">
        <h3 class="text-xl font-medium mb-2">Key Characteristics of Peach Fuzz:</h3>
        <ul class="list-disc pl-5">
          <li>Soft and warm peach tone</li>
          <li>Promotes comfort and well-being</li>
          <li>Encourages connection and positivity</li>
          <li>Versatile for various design applications</li>
        </ul>
      </div>

      <h2 class="text-2xl font-semibold mb-3">How Brands Are Celebrating Peach Fuzz</h2>
      <p class="mb-4">Several well-known brands are already working with Pantone to incorporate Peach Fuzz into their collections:</p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div class="border p-4 rounded-lg">
          <h4 class="font-bold mb-2">Ruggable</h4>
          <p>Launched a line of machine-washable rugs inspired by Peach Fuzz, perfect for adding a cheerful touch to any room.</p>
        </div>
        <div class="border p-4 rounded-lg">
          <h4 class="font-bold mb-2">Spoonflower</h4>
          <p>Offering custom wallpaper and fabric designs featuring Peach Fuzz, allowing people to decorate their homes with this welcoming shade.</p>
        </div>
        <div class="border p-4 rounded-lg">
          <h4 class="font-bold mb-2">Shades by Shan</h4>
          <p>Released a lip gloss collection that matches Peach Fuzz's soft and bold balance.</p>
        </div>
        <div class="border p-4 rounded-lg">
          <h4 class="font-bold mb-2">TEALEAVES</h4>
          <p>Blended a special tea inspired by the color, evoking the comfort and warmth that Peach Fuzz brings.</p>
        </div>
      </div>

      <h2 class="text-2xl font-semibold mb-3">Why Peach Fuzz Is the Perfect Pick for 2024</h2>
      <p class="mb-4">Pantone's choice of Peach Fuzz reflects a growing desire for warmth, coziness, and connection in everyday life. Whether you're looking to refresh your home décor or add a soft touch to your wardrobe, Peach Fuzz offers a color that's both stylish and calming.</p>

      <p class="mb-4">As we enter 2024, expect to see this shade across fashion, design, and even tech, as companies and individuals embrace its upbeat, nurturing qualities.</p>

      <div class="bg-blue-100 p-4 rounded-lg">
        <h3 class="text-xl font-medium mb-2">Looking Ahead</h3>
        <p>The selection of Peach Fuzz as the Color of the Year 2024 sets the tone for design trends in the coming year. Its versatility and comforting qualities make it a color to watch in various industries, from fashion to interior design and beyond.</p>
      </div>
    `,
    "translations": {}
  },
  {
    "title": "How to Find Pantone Color: A Step-by-Step Guide",
    "slug": "how-to-find-pantone-color-a-step-by-step-guide",
    "date": "2024-10-15",
    "excerpt": "Learn how to find and use Pantone colors effectively in your design projects with this comprehensive guide. Discover tools and best practices for working with the Pantone Matching System.",
    "content": `
      <h1 class="text-3xl font-bold mb-4">How to Find Pantone Color: A Step-by-Step Guide</h1>

      <p class="mb-6">Finding the perfect Pantone color for your design projects can be crucial for maintaining brand consistency and ensuring accurate color reproduction across various media. This guide will walk you through several methods to find and use Pantone colors effectively in your design workflow.</p>

      <h2 class="text-2xl font-semibold mb-3">1. Understanding What Pantone Colors Are</h2>
      <p class="mb-4">Pantone colors are standardized color codes that allow designers, manufacturers, and printers to accurately reproduce colors. The Pantone Matching System (PMS) helps ensure consistency across different platforms, from digital screens to print.</p>

      <div class="bg-yellow-100 p-4 rounded-lg mb-6">
        <h3 class="text-xl font-medium mb-2">Key Points:</h3>
        <ul class="list-disc pl-5">
          <li>Pantone colors are standardized color codes</li>
          <li>They ensure consistency across different media</li>
          <li>The Pantone Matching System (PMS) is widely used in design and printing</li>
        </ul>
      </div>

      <h2 class="text-2xl font-semibold mb-3">2. Why Use Pantone Colors in Design?</h2>
      <p class="mb-4">Pantone colors offer several advantages over traditional color formats like RGB or CMYK:</p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div class="border p-4 rounded-lg">
          <h4 class="font-bold mb-2">Consistency</h4>
          <p>Ensure color accuracy in print and digital designs.</p>
        </div>
        <div class="border p-4 rounded-lg">
          <h4 class="font-bold mb-2">Global Standard</h4>
          <p>Recognized worldwide as a reliable color matching system.</p>
        </div>
        <div class="border p-4 rounded-lg">
          <h4 class="font-bold mb-2">Specialty Colors</h4>
          <p>Offer unique hues that may not be possible with CMYK alone.</p>
        </div>
      </div>

      <h2 class="text-2xl font-semibold mb-3">3. Using Pantone Connect to Find Pantone Colors</h2>
      <p class="mb-4">Pantone Connect is a popular tool that allows designers to search for and apply Pantone colors directly within software like Adobe Creative Suite. Here's how to get started:</p>

      <ol class="list-decimal pl-5 mb-6">
        <li class="mb-2">
          <strong>Install Pantone Connect:</strong> Download from Adobe Marketplace or mobile app stores (iOS and Android).
        </li>
        <li class="mb-2">
          <strong>Use the Color Picker:</strong> Select colors or upload an image to find the closest Pantone match.
        </li>
        <li class="mb-2">
          <strong>Convert Colors:</strong> Use the converter tool to translate Hex, CMYK, or RGB to Pantone.
        </li>
      </ol>

      <h2 class="text-2xl font-semibold mb-3">4. How to Convert Colors to Pantone (RGB, CMYK, Hex)</h2>
      <p class="mb-4">If you have an existing color palette in RGB, CMYK, or Hex, converting it to Pantone is straightforward:</p>

      <div class="bg-green-100 p-4 rounded-lg mb-6">
        <h3 class="text-xl font-medium mb-2">Conversion Methods:</h3>
        <ul class="list-disc pl-5">
          <li><strong>Online Tools:</strong> Use free online Pantone converters for quick matches.</li>
          <li><strong>Pantone Color Books:</strong> Physical swatch books help match printed colors.</li>
          <li><strong>Software Integration:</strong> Use tools like Adobe Photoshop or Illustrator for direct conversion.</li>
        </ul>
      </div>

      <h2 class="text-2xl font-semibold mb-3">5. Capture Pantone Colors from Real-Life Inspiration</h2>
      <p class="mb-4">Using the Pantone Color Match Card with the Pantone Connect mobile app, you can capture colors from real-world objects or images:</p>

      <div class="border-l-4 border-blue-500 pl-4 mb-6">
        <h3 class="text-xl font-medium mb-2">Steps to Capture Colors:</h3>
        <ol class="list-decimal pl-5">
          <li class="mb-2">Place the Color Match Card next to your source.</li>
          <li class="mb-2">Use your phone's camera to capture and identify the closest Pantone color.</li>
          <li class="mb-2">Save the colors to your palette for future use.</li>
        </ol>
      </div>

      <h2 class="text-2xl font-semibold mb-3">6. Best Practices for Using Pantone Colors in Design</h2>
      <p class="mb-4">To maximize the benefits of Pantone colors in your projects:</p>

      <ul class="list-disc pl-5 mb-6">
        <li class="mb-2"><strong>Collaborate:</strong> Ensure all team members and printers use the same Pantone swatches.</li>
        <li class="mb-2"><strong>Check Updates:</strong> Keep an eye on Pantone's frequent library updates.</li>
        <li class="mb-2"><strong>Proofing:</strong> Always proof your designs with Pantone color prints for accuracy.</li>
      </ul>

      <div class="bg-purple-100 p-4 rounded-lg mb-6">
        <h2 class="text-2xl font-semibold mb-3">FAQs</h2>
        <div class="space-y-4">
          <div>
            <h3 class="font-bold">How do I find a Pantone color from an image?</h3>
            <p>Use tools like Pantone Connect or Adobe Photoshop's eyedropper tool to select a color from an image and convert it to the closest Pantone match.</p>
          </div>
          <div>
            <h3 class="font-bold">Can I convert RGB or CMYK to Pantone?</h3>
            <p>Yes, both online converters and Pantone Connect allow you to convert RGB, CMYK, or Hex codes to Pantone colors easily.</p>
          </div>
          <div>
            <h3 class="font-bold">What is the Pantone Matching System?</h3>
            <p>The Pantone Matching System (PMS) is a standardized color matching system that ensures color consistency across different media and production processes.</p>
          </div>
        </div>
      </div>
    `,
    "translations": {}
  },
  {
    "title": "How Many Pantone Colors Are There?",
    "slug": "how-many-pantone-colors-are-there",
    "date": "2024-10-15",
    "excerpt": "Discover the vast world of Pantone colors and learn about the different color systems used in design and printing. Find out how many Pantone colors exist as of 2024.",
    "content": `
      <h1 class="text-3xl font-bold mb-4">How Many Pantone Colors Are There?</h1>

      <p class="mb-6">When it comes to design, color is one of the most critical elements that bring life and personality to any visual creation. Whether you are a graphic designer, fashion expert, or marketer, having a reliable color system ensures that your work remains consistent, precise, and impactful. This is where Pantone comes into play, serving as the universal language of color across multiple industries. As of October 2024, the Pantone Matching System (PMS) includes 2,369 colors—a number that continues to grow with each update. But why does this system matter so much, and how do these colors influence design across the globe? Let's dive deeper into the Pantone world and explore its significance.</p>

      <h2 class="text-2xl font-semibold mb-3">What Is the Pantone Matching System (PMS)?</h2>
      <div class="bg-blue-100 p-4 rounded-lg mb-6">
        <p class="mb-2">The Pantone Matching System, commonly referred to as PMS, is the world's leading color matching system. It was first developed in the 1960s to address a critical issue in the design and printing industries: the lack of a standard way to communicate color across different mediums.</p>
        <p>Before Pantone, designers struggled to match colors accurately, leading to inconsistent print jobs and branding.</p>
      </div>

      <p class="mb-4">The PMS ensures that a specific shade of blue, red, or any other color appears the same whether it's on a business card, a billboard, or a website. By assigning each color a unique code, Pantone makes it possible for designers and printers to work with precision, knowing they'll achieve the same results no matter where or how the design is executed.</p>

      <p class="mb-4">Pantone's system started with a modest collection of colors, but today, it has expanded significantly. As of 2024, the system now boasts 2,369 unique colors.</p>

      <h2 class="text-2xl font-semibold mb-3">How Many Pantone Colors Are There in 2024?</h2>
      <p class="mb-4">The Pantone Matching System is more expansive than ever, with 2,369 colors currently available for designers to choose from. These include:</p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div class="border p-4 rounded-lg">
          <h3 class="font-bold mb-2">1,867 Solid Colors</h3>
          <p>Standard colors used in graphic design and printing, available in both coated and uncoated variations.</p>
        </div>
        <div class="border p-4 rounded-lg">
          <h3 class="font-bold mb-2">Metallic Colors</h3>
          <p>A collection of shimmering shades perfect for packaging and branding that needs to stand out.</p>
        </div>
        <div class="border p-4 rounded-lg">
          <h3 class="font-bold mb-2">Neons and Pastels</h3>
          <p>Ideal for fashion, interior design, and other creative industries that need bright or soft tones.</p>
        </div>
      </div>

      <p class="mb-6">In 2023 and 2024, Pantone introduced several new shades to keep up with evolving trends in technology, fashion, and design. These additions reflect Pantone's commitment to staying relevant in the fast-paced world of design, where new shades are often needed to match new materials, digital screens, and printing technologies.</p>

      <h2 class="text-2xl font-semibold mb-3">Why Do Pantone Colors Matter for Designers and Brands?</h2>
      <p class="mb-4">Pantone colors are crucial for designers and brands because they guarantee color consistency across all forms of media. Whether you're designing a product package, a billboard, or a social media campaign, using Pantone colors ensures that the colors look the same on every platform. This consistency is essential for brand identity, where the same shade of color becomes a recognizable feature of the brand's visual representation.</p>

      <div class="bg-yellow-100 p-4 rounded-lg mb-6">
        <p class="italic">Imagine Coca-Cola's iconic red being inconsistent across their products, marketing materials, and ads. It would damage the brand's image and cause confusion among consumers. This is where Pantone comes in—providing a reliable, universal color language.</p>
      </div>

      <p class="mb-6">For businesses and designers, using Pantone colors in branding is more than just a practical choice. It's a strategic one that boosts brand recognition, saves time in design and printing, and minimizes the risk of color mismatches.</p>

      <h2 class="text-2xl font-semibold mb-3">How Pantone Adds New Colors to Its System</h2>
      <p class="mb-4">Pantone is continuously evolving its color library, with new shades being added every few years. But how does Pantone decide what colors to include in their system?</p>

      <div class="space-y-4 mb-6">
        <div>
          <h3 class="text-xl font-medium mb-2">Industry trends</h3>
          <p>Pantone closely monitors trends in fashion, technology, and design to determine which colors are gaining popularity. For example, as neon and pastel colors became more popular in recent years, Pantone expanded its collection to reflect these trends.</p>
        </div>
        <div>
          <h3 class="text-xl font-medium mb-2">Scientific advancement</h3>
          <p>New materials and printing technologies often require new color formulas. Pantone works closely with manufacturers to develop colors that work with the latest production processes.</p>
        </div>
        <div>
          <h3 class="text-xl font-medium mb-2">Feedback from designers</h3>
          <p>Pantone takes feedback from its users seriously. Designers and brands can submit requests for new colors, which may be added in future updates.</p>
        </div>
      </div>

      <p class="mb-6">The result is a system that remains fresh and relevant, ensuring that designers have the tools they need to meet modern demands.</p>

      <h2 class="text-2xl font-semibold mb-3">Pantone's Specialty Color Systems</h2>
      <p class="mb-4">In addition to the standard PMS, Pantone offers several specialty color collections designed for specific industries. These include:</p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div class="border p-4 rounded-lg">
          <h3 class="font-bold mb-2">Pantone Metallics</h3>
          <p>A collection of shimmering, reflective colors often used in packaging, luxury products, and branding. Metallic colors give designs a sense of sophistication and premium quality.</p>
        </div>
        <div class="border p-4 rounded-lg">
          <h3 class="font-bold mb-2">Pantone Neons</h3>
          <p>Bright, eye-catching colors perfect for brands that want to make a bold statement. These colors are widely used in the fashion industry, particularly for sportswear and activewear.</p>
        </div>
        <div class="border p-4 rounded-lg">
          <h3 class="font-bold mb-2">Pantone Pastels</h3>
          <p>Soft, soothing colors that are popular in interior design, cosmetics, and fashion. Pastels evoke a sense of calm and elegance, making them perfect for projects that require a gentle touch.</p>
        </div>
      </div>

      <p class="mb-6">These specialty collections give designers even more flexibility and creativity, ensuring they have the right color for any project.</p>

      <h2 class="text-2xl font-semibold mb-3">How to Use Pantone Colors Effectively in Design</h2>
      <p class="mb-4">Designers often face challenges when working with colors, particularly when switching between digital and print media. Here are some tips for using Pantone colors effectively:</p>

      <ul class="list-disc pl-5 mb-6">
        <li class="mb-2"><strong>Use Pantone guides:</strong> Always refer to Pantone's printed guides to ensure the color you choose is the same in both digital and print forms.</li>
        <li class="mb-2"><strong>Utilize Pantone Connect:</strong> Pantone Connect is a digital tool that allows designers to integrate Pantone colors directly into design software like Adobe. This ensures accurate color selection and translation across platforms.</li>
        <li class="mb-2"><strong>Stay updated:</strong> With over 2,369 colors to choose from, designers must keep their color guides updated. Old Pantone guides can become faded or obsolete, leading to inaccurate color reproduction.</li>
        <li class="mb-2"><strong>Know your medium:</strong> When using Pantone colors, it's essential to understand the differences between coated and uncoated options. Coated colors are more vibrant, while uncoated colors appear softer. Choose the one that best fits your design needs.</li>
      </ul>

      <div class="bg-green-100 p-4 rounded-lg mb-6">
        <h2 class="text-2xl font-semibold mb-3">FAQs About Pantone Colors</h2>
        <div class="space-y-4">
          <div>
            <h3 class="font-bold">How often does Pantone release new colors?</h3>
            <p>Pantone typically updates its color system every few years, adding new colors based on emerging trends and demands in various industries.</p>
          </div>
          <div>
            <h3 class="font-bold">Are Pantone colors used worldwide?</h3>
            <p>Yes, Pantone colors are the global standard in industries such as printing, fashion, and interior design, ensuring consistency across international markets.</p>
          </div>
          <div>
            <h3 class="font-bold">How can I access the latest Pantone color guides?</h3>
            <p>You can purchase updated Pantone Formula Guides or use digital tools like Pantone Connect to access the most current colors and formulas.</p>
          </div>
          <div>
            <h3 class="font-bold">Can Pantone colors be converted to other color systems like CMYK or RGB?</h3>
            <p>Yes, Pantone provides conversion charts and tools to help designers translate Pantone colors into other color systems such as CMYK, RGB, and Hex.</p>
          </div>
          <div>
            <h3 class="font-bold">How long do Pantone guides last before needing replacement?</h3>
            <p>Pantone recommends replacing your color guides every 12 to 18 months, as exposure to light and handling can cause colors to fade.</p>
          </div>
        </div>
      </div>
    `,
    "translations": {}
  }
];

export function getBlogPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getTranslatedBlogPost(slug: string, lang: string): BlogPost | undefined {
  const post = getBlogPost(slug);
  if (!post) return undefined;

  if (lang === 'en') return post;

  const translation = post.translations[lang];
  if (!translation) return post;

  return {
    ...post,
    title: translation.title,
    excerpt: translation.excerpt,
    content: translation.content,
  };
}