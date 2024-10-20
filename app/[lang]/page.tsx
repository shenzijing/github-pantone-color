<<<<<<< HEAD
import { ColorGrid } from '@/components/ColorGrid';
import { getPantoneColors } from '@/lib/colors';
import { i18n } from '@/lib/i18n';
=======
import { getPantoneColors } from '@/lib/colors';
import { i18n } from '@/lib/i18n';
import { HomeContent } from '@/components/HomeContent';
>>>>>>> 7cde95fd5fb83df98a42d6f40fbb37756b0a7ac0

export function generateStaticParams() {
  return i18n.locales.map((lang) => ({ lang }));
}

<<<<<<< HEAD
export default async function Home() {
  const colors = await getPantoneColors();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-4">Pantone Colors Chart</h1>
      <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
        Explore our comprehensive collection of Pantone colors. Find the perfect hue for your design projects with our easy-to-use color chart featuring HEX, RGB, and CMYK values.
      </p>
      <ColorGrid colors={colors} />
      
      {/* Rest of the content remains the same */}
    </div>
  );
=======
export default async function Home({ params }: { params: { lang: string } }) {
  const colors = await getPantoneColors();

  return <HomeContent colors={colors} />;
>>>>>>> 7cde95fd5fb83df98a42d6f40fbb37756b0a7ac0
}