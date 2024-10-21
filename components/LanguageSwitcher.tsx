"use client";

import { useRouter, usePathname } from 'next/navigation';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { i18n, getLanguageName } from '@/lib/i18n';

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLang = pathname.split('/')[1] || i18n.defaultLocale;

  const handleLanguageChange = (newLang: string) => {
    const pathParts = pathname.split('/').filter(Boolean);
    let newPathname;

    if (pathParts[0] === currentLang) {
      // If the current language is in the path, replace it
      pathParts[0] = newLang;
      newPathname = '/' + pathParts.join('/');
    } else {
      // If the current language is not in the path, add the new language
      newPathname = `/${newLang}${pathname}`;
    }

    // If the new language is the default, remove it from the path
    if (newLang === i18n.defaultLocale) {
      newPathname = newPathname.replace(`/${i18n.defaultLocale}`, '');
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