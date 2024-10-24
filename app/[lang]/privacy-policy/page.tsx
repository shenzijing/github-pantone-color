import { useTranslation } from '@/hooks/useTranslation';
import { i18n } from '@/lib/i18n';

export function generateStaticParams() {
  return i18n.locales.map((lang) => ({ lang }));
}

export default function PrivacyPolicyPage({ params }: { params: { lang: string } }) {
  const { t } = useTranslation(params.lang);

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">{t('privacyPolicy')}</h1>
      <p className="mb-4">{t('lastUpdated')}</p>

      <p className="mb-4">{t('privacyIntro')}</p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">{t('infoWeCollect')}</h2>
      <p className="mb-4">{t('infoWeCollectContent')}</p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">{t('howWeUseInfo')}</h2>
      <p className="mb-4">{t('howWeUseInfoContent')}</p>
      <ul className="list-disc pl-8 mb-4">
        <li>{t('useInfoList1')}</li>
        <li>{t('useInfoList2')}</li>
        <li>{t('useInfoList3')}</li>
        <li>{t('useInfoList4')}</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-4">{t('sharingInfo')}</h2>
      <p className="mb-4">{t('sharingInfoContent')}</p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">{t('yourRights')}</h2>
      <p className="mb-4">{t('yourRightsContent')}</p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">{t('dataRetention')}</h2>
      <p className="mb-4">{t('dataRetentionContent')}</p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">{t('policyChanges')}</h2>
      <p className="mb-4">{t('policyChangesContent')}</p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">{t('contactUsSection')}</h2>
      <p className="mb-4">{t('contactUsContent')}</p>
    </div>
  );
}

export const dynamic = 'force-static';
