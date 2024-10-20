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
            <Image src="/pantone-colors.svg" alt="Website Icon" width={32} height={32} className="mr-2" />
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

      <footer className="bg-gray-100">
        <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-bold mb-2">{t('aboutUs')}</h3>
            <p className="text-sm">{t('aboutUsDescription')}</p>
          </div>
          <div>
            <h3 className="font-bold mb-2">{t('quickLinks')}</h3>
            <ul className="text-sm space-y-1">
              <li><Link href={`/${lang}/blog`}>{t('blog')}</Link></li>
              <li><Link href={`/${lang}/privacy-policy`}>{t('privacyPolicy')}</Link></li>
              <li><Link href={`/${lang}/terms-of-service`}>{t('termsOfService')}</Link></li>
            </ul>
          </div>
        </div>
        <div className="bg-gray-200 py-2 text-center text-sm">
          <p>{t('copyright')}</p>
          <p>{t('contactUs')}: <a href="mailto:info@pantonecolors.com" className="text-blue-600 hover:underline">info@pantonecolors.com</a></p>
        </div>
      </footer>
    </div>
  );
}