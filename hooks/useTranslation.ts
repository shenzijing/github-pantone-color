"use client";

import { useParams } from 'next/navigation';
import { translations, SupportedLanguages, TranslationKeys } from '@/lib/translations';

export function useTranslation() {
  const params = useParams();
  const lang = (params?.lang as SupportedLanguages) || 'en';

  const t = (key: TranslationKeys): string => {
    return translations[lang]?.[key] || translations['en'][key] || key;
  };

  return { t, lang };
}