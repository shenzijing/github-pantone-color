"use client";

<<<<<<< HEAD
import { useRouter, usePathname } from 'next/navigation';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { i18n, getLanguageName } from '@/lib/i18n';

<<<<<<< HEAD
// ... rest of the file remains the same
=======
export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLang = pathname.split('/')[1] || i18n.defaultLocale;

  const handleLanguageChange = (newLang: string) => {
    const newPathname = pathname.replace(/^\/[a-z]{2}/, '');
    router.push(`/${newLang}${newPathname}`);
  };

  return (
    <Select value={currentLang} onValueChange={handleLanguageChange}>
=======
import { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const languages = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Español' },
  { code: 'fr', name: 'Français' },
  { code: 'de', name: 'Deutsch' },
  { code: 'it', name: 'Italiano' },
];

export function LanguageSwitcher() {
  const [language, setLanguage] = useState('en');

  return (
    <Select value={language} onValueChange={setLanguage}>
>>>>>>> 7cde95fd5fb83df98a42d6f40fbb37756b0a7ac0
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select Language" />
      </SelectTrigger>
      <SelectContent>
<<<<<<< HEAD
        {i18n.locales.map((lang) => (
          <SelectItem key={lang} value={lang}>
            {getLanguageName(lang)}
=======
        {languages.map((lang) => (
          <SelectItem key={lang.code} value={lang.code}>
            {lang.name}
>>>>>>> 7cde95fd5fb83df98a42d6f40fbb37756b0a7ac0
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
>>>>>>> parent of 67bdaa3 (1020)
