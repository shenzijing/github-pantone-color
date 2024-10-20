<<<<<<< HEAD
import { ColorGrid } from '@/components/ColorGrid';
import { getPantoneColors } from '@/lib/colors';
import { i18n } from '@/lib/i18n';
<<<<<<< HEAD
import { getDictionary } from '@/lib/getDictionary';
=======
=======
import { getPantoneColors } from '@/lib/colors';
import { i18n } from '@/lib/i18n';
import { HomeContent } from '@/components/HomeContent';
>>>>>>> 7cde95fd5fb83df98a42d6f40fbb37756b0a7ac0
>>>>>>> parent of 67bdaa3 (1020)

export function generateStaticParams() {
  return i18n.locales.map((lang) => ({ lang }));
}

<<<<<<< HEAD
export default async function Home({ params: { lang } }: { params: { lang: string } }) {
=======
<<<<<<< HEAD
export default async function Home() {
>>>>>>> parent of 67bdaa3 (1020)
  const colors = await getPantoneColors();
  const dict = await getDictionary(lang);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-4">{dict.home.title}</h1>
      <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
        {dict.home.description}
      </p>
      <ColorGrid colors={colors} />
      
      <div className="mt-12">
        <h2 className="text-3xl font-bold mb-4">{dict.home.whatIsPantone}</h2>
        <p className="mb-4">{dict.home.pantoneDescription}</p>

        <h2 className="text-2xl font-bold mt-8 mb-4">{dict.home.howToUse}</h2>
        <p className="mb-4">{dict.home.howToUseDescription}</p>

        <h2 className="text-2xl font-bold mt-8 mb-4">{dict.home.colorOfTheYear}</h2>
        <p className="mb-4">{dict.home.colorOfTheYearDescription}</p>

        <h2 className="text-2xl font-bold mt-8 mb-4">{dict.home.colorSystems}</h2>
        <p className="mb-4">{dict.home.colorSystemsDescription}</p>

        <h2 className="text-2xl font-bold mt-8 mb-4">{dict.home.faqs}</h2>
        <ul className="list-disc pl-5 space-y-2">
          {dict.home.faqsList.map((faq, index) => (
            <li key={index}><strong>{faq.question}</strong><br />{faq.answer}</li>
          ))}
        </ul>
      </div>

      <div className="mt-12 text-sm text-gray-600 border-t pt-4">
        <h2 className="font-semibold mb-2">{dict.home.disclaimer}</h2>
        <p>{dict.home.disclaimerText}</p>
      </div>
    </div>
  );
=======
export default async function Home({ params }: { params: { lang: string } }) {
  const colors = await getPantoneColors();

  return <HomeContent colors={colors} />;
>>>>>>> 7cde95fd5fb83df98a42d6f40fbb37756b0a7ac0
}