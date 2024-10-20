"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { useTranslation } from '@/hooks/useTranslation';

export function Layout({ children }: { children: React.ReactNode }) {
  const { t, lang } = useTranslation();

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-10">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href={`/${lang}`} className="flex items-center">
            <Image 
              src="/pantone-colors.svg" 
              alt="Pantone Colors Logo" 
              width={32} 
              height={32} 
              className="mr-2"
            />
            <span className="text-2xl font-bold">Pantone Colors Chart</span>
          </Link>
          <div className="space-x-6 flex items-center">
            <Link href={`/${lang}`} passHref><Button variant="ghost" className="text-lg">{t('home')}</Button></Link>
            <Link href={`/${lang}/blog`} passHref><Button variant="ghost" className="text-lg">{t('blog')}</Button></Link>
            <LanguageSwitcher />
          </div>
        </nav>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8 mt-20">
        {children}
      </main>

      {/* Footer content remains unchanged */}
    </div>
  );
}