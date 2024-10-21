import { ColorGrid } from '@/components/ColorGrid';
import { getPantoneColors } from '@/lib/colors';
import { getTranslation, TranslationKey } from '@/lib/translations';

export default async function Home() {
  const colors = await getPantoneColors();
  const t = (key: TranslationKey) => getTranslation('en', key);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-4">{t('pantoneColorsChart')}</h1>
      <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
        {t('exploreColors')}
      </p>
      <ColorGrid colors={colors} />

      <div className="mt-12">
        <h2 className="text-3xl font-bold mb-4">{t('whatIsPantone')}</h2>
        <p className="mb-4">
          {t('pantoneDescription')}
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">{t('howToUsePantone')}</h2>
        <p className="mb-4">
          {t('pantoneUsage')}
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">{t('pantoneColorOfTheYear')}</h2>
        <p className="mb-4">
          {t('colorOfTheYearDescription')}
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">{t('pantoneVsOthers')}</h2>
        <p className="mb-4">
          {t('colorSystemsComparison')}
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">{t('faqs')}</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>{t('faqPurpose')}</strong><br />{t('faqPurposeAnswer')}</li>
          <li><strong>{t('faqBranding')}</strong><br />{t('faqBrandingAnswer')}</li>
          <li><strong>{t('faqPMS')}</strong><br />{t('faqPMSAnswer')}</li>
          <li><strong>{t('faqColorOfYear')}</strong><br />{t('faqColorOfYearAnswer')}</li>
          <li><strong>{t('faqWebDesign')}</strong><br />{t('faqWebDesignAnswer')}</li>
        </ul>
      </div>

      <div className="mt-12 text-sm text-gray-600 border-t pt-4">
        <h2 className="font-semibold mb-2">{t('disclaimer')}</h2>
        <p>
          {t('disclaimerContent')}
        </p>
      </div>
    </div>
  );
}