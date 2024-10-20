"use client";

import { useParams } from 'next/navigation';
import { translations } from '@/lib/translations';

export function useTranslation() {
  const params = useParams();
  const lang = (params?.lang as string) || 'en';

  const t = (key: string) => {
    return translations[lang]?.[key] || translations['en'][key] || key;
  };

  return { t, lang };
}