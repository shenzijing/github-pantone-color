import { i18n } from '@/lib/i18n';
import { getTranslation, TranslationKey } from '@/lib/translations';

export function useTranslation(lang: string = i18n.defaultLocale) {
  const t = (key: TranslationKey) => getTranslation(lang, key);
  return { t, lang };
}