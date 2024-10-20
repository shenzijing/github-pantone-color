import { useParams } from 'next/navigation';
import { getTranslation, TranslationKey } from '@/lib/translations';

export function useTranslation() {
  const params = useParams();
  const lang = params?.lang as string || 'en';

  const t = (key: TranslationKey) => getTranslation(lang, key);

  return { t };
}