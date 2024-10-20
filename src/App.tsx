import React from 'react';
import { useTranslation } from 'next-i18next';
import LanguageSwitcher from './components/LanguageSwitcher';
import { Palette } from 'lucide-react';
import Link from 'next/link';

function App({ Component, pageProps }) {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Palette className="mr-2" size={24} />
              <Link href="/" className="text-xl font-bold">{t('pantoneColorsChart')}</Link>
            </div>
            <div className="flex space-x-4 items-center">
              <Link href="/" className="text-gray-800 hover:text-blue-500">{t('home')}</Link>
              <Link href="/blog" className="text-gray-800 hover:text-blue-500">{t('blog')}</Link>
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow container mx-auto p-4">
        <Component {...pageProps} />
      </main>

      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h2 className="text-lg font-semibold mb-3">{t('aboutUs')}</h2>
              <p className="text-gray-400">{t('aboutUsDescription')}</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-3">{t('quickLinks')}</h2>
              <ul className="text-gray-400 space-y-2">
                <li><Link href="/" className="hover:text-white">{t('home')}</Link></li>
                <li><Link href="/blog" className="hover:text-white">{t('blog')}</Link></li>
                <li><Link href="/privacy" className="hover:text-white">{t('privacyPolicy')}</Link></li>
                <li><Link href="/terms" className="hover:text-white">{t('termsOfService')}</Link></li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-3">{t('contactUs')}</h2>
              <p className="text-gray-400">{t('email')}: info@pantonecolors.net</p>
            </div>
          </div>
          <div className="mt-6 border-t border-gray-700 pt-6 text-center text-gray-400">
            <p>{t('copyright')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;