"use client";

import { useRouter, usePathname } from 'next/navigation';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { i18n, getLanguageName } from '@/lib/i18n';

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLang = pathname.split('/')[1] || i18n.defaultLocale;

  const handleLanguageChange = (newLang: string) => {
    let newPathname = pathname.replace(/^\/[a-z]{2}/, '');
    if (newLang === i18n.defaultLocale) {
      router.push(newPathname || '/');
    } else {
      router.push(`/${newLang}${newPathname}`);
    }
  };

  return (
    <Select value={currentLang} onValueChange={handleLanguageChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select Language" />
      </SelectTrigger>
      <SelectContent>
        {i18n.locales.map((lang) => (
          <SelectItem key={lang} value={lang}>
            {getLanguageName(lang)}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}