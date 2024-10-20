import { getPantoneColors } from '@/lib/colors';
import { i18n } from '@/lib/i18n';
import { HomeContent } from '@/components/HomeContent';

export function generateStaticParams() {
  return i18n.locales.map((lang) => ({ lang }));
}

export default async function Home({ params }: { params: { lang: string } }) {
  const colors = await getPantoneColors();

  return <HomeContent colors={colors} />;
}