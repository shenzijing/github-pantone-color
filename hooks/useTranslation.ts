import { useParams } from 'next/navigation';
import { getTranslation, TranslationKey } from '@/lib/translations';
import { i18n } from '@/lib/i18n';

export function useTranslation() {
  let lang = i18n.defaultLocale;

  try {
    const params = useParams();
    lang = (params?.lang as string) || i18n.defaultLocale;
  } catch (error) {
    console.warn('useParams hook failed, falling back to default language');
  }

  const t = (key: TranslationKey) => getTranslation(lang, key);

  return { t, lang };
}