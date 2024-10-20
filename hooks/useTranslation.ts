import { useParams } from 'next/navigation';
import { getTranslation, TranslationKey } from '@/lib/translations';

export function useTranslation() {
  let lang = 'en';

  try {
    const params = useParams();
    lang = (params?.lang as string) || 'en';
  } catch (error) {
    console.warn('useParams hook failed, falling back to default language');
  }

  const t = (key: TranslationKey) => getTranslation(lang, key);

  return { t };
}