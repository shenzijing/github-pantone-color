"use client";

import { useRouter, usePathname } from 'next/navigation';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { i18n, getLanguageName } from '@/lib/i18n';

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const pathParts = pathname.split('/').filter(Boolean);
  const currentLang = i18n.locales.includes(pathParts[0]) ? pathParts[0] : i18n.defaultLocale;

  const handleLanguageChange = (newLang: string) => {
    let newPathname;

    if (i18n.locales.includes(pathParts[0])) {
      // If the current path includes a language code, replace it
      newPathname = '/' + [newLang, ...pathParts.slice(1)].join('/');
    } else {
      // If the current path doesn't include a language code, add it
      newPathname = `/${newLang}${pathname}`;
    }

    // If the new language is English, remove the language code from the path
    if (newLang === 'en') {
      newPathname = '/' + pathParts.slice(1).join('/');
    }

    // Ensure there's always a leading slash
    newPathname = newPathname || '/';

    router.push(newPathname);
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