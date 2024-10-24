import { useTranslation } from '@/hooks/useTranslation';
import { i18n } from '@/lib/i18n';

export function generateStaticParams() {
  return i18n.locales.map((lang) => ({ lang }));
}

export default function TermsOfServicePage({ params }: { params: { lang: string } }) {
  const { t } = useTranslation(params.lang);

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">{t('termsOfService')}</h1>
      <p className="mb-4">{t('lastUpdated')}</p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">{t('termsAcceptance')}</h2>
      <p className="mb-4">{t('termsAcceptanceContent')}</p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">{t('serviceDesc')}</h2>
      <p className="mb-4">{t('serviceDescContent')}</p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">{t('useLicense')}</h2>
      <p className="mb-4">{t('useLicenseContent')}</p>
      <ul className="list-disc pl-8 mb-4">
        <li>{t('licenseList1')}</li>
        <li>{t('licenseList2')}</li>
        <li>{t('licenseList3')}</li>
        <li>{t('licenseList4')}</li>
        <li>{t('licenseList5')}</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-4">{t('termsDisclaimer')}</h2>
      <p className="mb-4">{t('termsDisclaimerContent1')}</p>
      <p className="mb-4">{t('termsDisclaimerContent2')}</p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">{t('limitations')}</h2>
      <p className="mb-4">{t('limitationsContent')}</p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">{t('accuracy')}</h2>
      <p className="mb-4">{t('accuracyContent')}</p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">{t('links')}</h2>
      <p className="mb-4">{t('linksContent')}</p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">{t('modifications')}</h2>
      <p className="mb-4">{t('modificationsContent')}</p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">{t('governingLaw')}</h2>
      <p className="mb-4">{t('governingLawContent')}</p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">{t('contactUs')}</h2>
      <p className="mb-4">{t('contactUsContent')}</p>
    </div>
  );
}

export const dynamic = 'force-static';