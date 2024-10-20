import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Layout from '../components/Layout';
import PrivacyPolicy from '../components/PrivacyPolicy';

export default function PrivacyPage() {
  const { t } = useTranslation('common');

  return (
    <Layout>
      <PrivacyPolicy />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    },
  };
};