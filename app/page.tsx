import { ColorGrid } from '@/components/ColorGrid';
import { getPantoneColors } from '@/lib/colors';

export default async function Home() {
  const colors = await getPantoneColors();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-4">Pantone Colors Chart</h1>
      <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
        Explore our comprehensive collection of Pantone colors. Find the perfect hue for your design projects with our easy-to-use color chart featuring HEX, RGB, and CMYK values.
      </p>
      <ColorGrid colors={colors} />
      
      <div className="mt-12">
        <h2 className="text-3xl font-bold mb-4">What is Pantone?</h2>
        <p className="mb-4">
          Pantone is a color-matching system that helps designers and manufacturers ensure consistency in color across different materials and mediums. The Pantone Matching System (PMS) was created in 1963 to standardize color selection. Each Pantone color is assigned a unique code, which helps eliminate confusion when matching shades. Pantone colors are widely used across industries like fashion, printing, product design, and interior decoration.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">How to Use Pantone Colors</h2>
        <p className="mb-4">
          Pantone colors are used in several ways across design, printing, and branding. In design, Pantone colors are crucial for fashion, interior design, and even digital interfaces. For printing, Pantone helps create vibrant, accurate colors. In branding, big brands often choose specific Pantone colors for their logos and branding materials to ensure worldwide consistency.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Pantone Color of the Year</h2>
        <p className="mb-4">
          Each year, Pantone selects a Color of the Year that reflects global trends and cultural shifts. This color influences industries like fashion, interior design, and marketing. For example, the Color of the Year 2024 is 'Peach Fuzz', a warm, inviting shade that symbolizes optimism and creativity.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Pantone vs. CMYK vs. RGB vs. Hex</h2>
        <p className="mb-4">
          Pantone is a standardized color-matching system used mostly in printing and branding. CMYK (Cyan, Magenta, Yellow, Black) is used in most printing processes. RGB (Red, Green, Blue) is used for digital screens. Hexadecimal colors (Hex) are a version of the RGB model, used mainly in web design.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">FAQs</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>What is the main purpose of Pantone colors?</strong><br />Pantone colors ensure that the same color looks identical across various materials, screens, and products, no matter where or how it's produced.</li>
          <li><strong>Why are Pantone colors used in branding?</strong><br />Pantone colors are popular in branding because they ensure consistency. A brand can have the same exact color on its logo, whether printed on a business card, a website, or a billboard.</li>
          <li><strong>What is the Pantone Matching System?</strong><br />The Pantone Matching System (PMS) is a standardized color-matching system used worldwide, primarily in design, fashion, printing, and manufacturing.</li>
          <li><strong>How often does Pantone choose a Color of the Year?</strong><br />Pantone selects a new Color of the Year annually, reflecting current global trends and cultural influences.</li>
          <li><strong>Can I use Pantone colors in web design?</strong><br />Pantone colors are typically not used for web design because web colors are usually in RGB or Hex. However, designers sometimes reference Pantone colors to match web elements to physical branding.</li>
        </ul>
      </div>

      <div className="mt-12 text-sm text-gray-600 border-t pt-4">
        <h2 className="font-semibold mb-2">Disclaimer</h2>
        <p>
          The Pantone Color Chart provided on this website is for reference purposes only. While we strive for accuracy, the digital representation of colors may vary depending on your display settings. For precise color matching, please refer to official Pantone color guides and standards.
        </p>
      </div>
    </div>
  );
}