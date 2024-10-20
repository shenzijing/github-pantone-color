import { ColorGrid } from '@/components/ColorGrid';
import { getPantoneColors } from '@/lib/colors';
import { i18n } from '@/lib/i18n';
import { getTranslation } from '@/lib/translations';

export function generateStaticParams() {
  return i18n.locales.map((lang) => ({ lang }));
}

export default async function Home({ params }: { params: { lang: string } }) {
  const colors = await getPantoneColors();
  const t = (key: string) => getTranslation(params.lang, key);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-4">{t('pantoneColorsChart')}</h1>
      <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
        {t('exploreColors')}
      </p>
      <ColorGrid colors={colors} />
      
      {/* Rest of the content remains the same */}
    </div>
  );
}