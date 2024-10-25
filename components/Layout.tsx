'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { Menu, X, Palette } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';
import { i18n } from '@/lib/i18n';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const pathParts = pathname.split('/').filter(Boolean);
  const currentLang = i18n.locales.includes(pathParts[0]) ? pathParts[0] : i18n.defaultLocale;
  const { t } = useTranslation(currentLang);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const getLocalizedHref = (path: string) => {
    return currentLang === 'en' ? path : `/${currentLang}${path}`;
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
        <nav className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href={getLocalizedHref('/')} className="flex items-center">
              <Palette className="h-8 w-8 mr-2 text-blue-600" />
              <span className="text-xl font-bold hidden sm:inline">{t('pantoneColorsChart')}</span>
              <span className="text-xl font-bold sm:hidden">Pantone</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <Link href={getLocalizedHref('/')} passHref>
                <Button variant="ghost" className="text-lg">{t('home')}</Button>
              </Link>
              <Link href={getLocalizedHref('/blog')} passHref>
                <Button variant="ghost" className="text-lg">{t('blog')}</Button>
              </Link>
              <LanguageSwitcher />
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div
            className={cn(
              "md:hidden absolute left-0 right-0 bg-white px-4 pb-4 shadow-lg transition-all duration-300 ease-in-out",
              {
                "opacity-100 translate-y-0": isMenuOpen,
                "opacity-0 -translate-y-2 pointer-events-none": !isMenuOpen
              }
            )}
          >
            <div className="flex flex-col space-y-4 pt-2">
              <Link href={getLocalizedHref('/')} passHref>
                <Button variant="ghost" className="w-full justify-start text-lg">{t('home')}</Button>
              </Link>
              <Link href={getLocalizedHref('/blog')} passHref>
                <Button variant="ghost" className="w-full justify-start text-lg">{t('blog')}</Button>
              </Link>
              <div className="py-2">
                <LanguageSwitcher />
              </div>
            </div>
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
            <p className="text-sm">{t('aboutUsContent')}</p>
          </div>
          <div>
            <h3 className="font-bold mb-2">{t('quickLinks')}</h3>
            <ul className="text-sm space-y-1">
              <li><Link href={getLocalizedHref('/blog')}>{t('blog')}</Link></li>
              <li><Link href={getLocalizedHref('/privacy-policy')}>{t('privacyPolicy')}</Link></li>
              <li><Link href={getLocalizedHref('/terms-of-service')}>{t('termsOfService')}</Link></li>
            </ul>
          </div>
        </div>
        <div className="bg-gray-200 py-2 text-center text-sm">
          <p>{t('copyright')}</p>
          <p>{t('contactUs')}: <a href="mailto:info@pantonecolors.net" className="text-blue-600 hover:underline">info@pantonecolors.net</a></p>
        </div>
      </footer>
    </div>
  );
}