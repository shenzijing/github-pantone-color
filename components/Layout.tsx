'use client';

import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';
import { i18n } from '@/lib/i18n';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const MobileNav = dynamic(() => import('@/components/layout/MobileNav'), {
  ssr: false,
  loading: () => null
});

export function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const pathParts = pathname.split('/').filter(Boolean);
  const currentLang = i18n.locales.includes(pathParts[0]) ? pathParts[0] : i18n.defaultLocale;

  return (
    <div className="flex flex-col min-h-screen">
      <Header currentLang={currentLang} />
      <MobileNav currentLang={currentLang} />
      <main className="flex-grow container mx-auto px-4 py-8 mt-20">
        {children}
      </main>
      <Footer currentLang={currentLang} />
    </div>
  );
}