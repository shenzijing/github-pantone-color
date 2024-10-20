<<<<<<< HEAD
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { getDictionary } from '@/lib/getDictionary';

export async function Layout({ children, lang }: { children: React.ReactNode; lang: string }) {
  const dict = await getDictionary(lang);

<<<<<<< HEAD
=======
export function Layout({ children }: { children: React.ReactNode }) {
=======
"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { useTranslation } from '@/hooks/useTranslation';

export function Layout({ children }: { children: React.ReactNode }) {
  const { t, lang } = useTranslation();

>>>>>>> 7cde95fd5fb83df98a42d6f40fbb37756b0a7ac0
>>>>>>> parent of 67bdaa3 (1020)
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-10">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
<<<<<<< HEAD
          <Link href={`/${lang}`} className="flex items-center">
            <Image src="/pantone-colors.svg" alt={dict.layout.logoAlt} width={32} height={32} className="mr-2" />
            <span className="text-2xl font-bold">{dict.layout.title}</span>
          </Link>
          <div className="space-x-6 flex items-center">
            <Link href={`/${lang}`} passHref><Button variant="ghost" className="text-lg">{dict.layout.home}</Button></Link>
            <Link href={`/${lang}/blog`} passHref><Button variant="ghost" className="text-lg">{dict.layout.blog}</Button></Link>
=======
<<<<<<< HEAD
          <Link href="/" className="flex items-center">
            <Image src="/pantone-colors.svg" alt="Website Icon" width={32} height={32} className="mr-2" />
            <span className="text-2xl font-bold">Pantone Colors Chart</span>
          </Link>
          <div className="space-x-6 flex items-center">
            <Link href="/" passHref><Button variant="ghost" className="text-lg">Home</Button></Link>
            <Link href="/blog" passHref><Button variant="ghost" className="text-lg">Blog</Button></Link>
=======
<<<<<<< HEAD
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
=======
          <Link href="/" className="text-2xl font-bold">Pantone Colors Chart</Link>
          <div className="space-x-6 flex items-center">
            <Link href="/" passHref><Button variant="ghost" className="text-lg">Home</Button></Link>
            <Link href="/blog" passHref><Button variant="ghost" className="text-lg">Blog</Button></Link>
            <Link href="/about" passHref><Button variant="ghost" className="text-lg">About</Button></Link>
>>>>>>> parent of 041be38 (多语言脚本)
>>>>>>> 7cde95fd5fb83df98a42d6f40fbb37756b0a7ac0
>>>>>>> parent of 67bdaa3 (1020)
            <LanguageSwitcher />
          </div>
        </nav>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8 mt-20">
        {children}
      </main>

<<<<<<< HEAD
      <footer className="bg-gray-100">
        <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
=======
<<<<<<< HEAD
      <footer className="bg-gray-100 mt-12">
        <div className="container mx-auto px-4 py-8">
          <p className="text-center text-gray-600">© 2024 Pantone Colors Chart. All rights reserved.</p>
=======
      <footer className="bg-gray-100">
        <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
>>>>>>> 7cde95fd5fb83df98a42d6f40fbb37756b0a7ac0
          <div>
            <h3 className="font-bold mb-2">{dict.layout.aboutUs}</h3>
            <p className="text-sm">{dict.layout.aboutUsDescription}</p>
          </div>
          <div>
            <h3 className="font-bold mb-2">{dict.layout.quickLinks}</h3>
            <ul className="text-sm space-y-1">
              <li><Link href={`/${lang}/blog`}>{dict.layout.blog}</Link></li>
              <li><Link href={`/${lang}/privacy-policy`}>{dict.layout.privacyPolicy}</Link></li>
              <li><Link href={`/${lang}/terms-of-service`}>{dict.layout.termsOfService}</Link></li>
            </ul>
          </div>
<<<<<<< HEAD
        </div>
        <div className="bg-gray-200 py-2 text-center text-sm">
<<<<<<< HEAD
          <p>{dict.layout.copyright}</p>
          <p>{dict.layout.contactUs}: <a href="mailto:info@pantonecolors.com" className="text-blue-600 hover:underline">info@pantonecolors.com</a></p>
=======
          <p>© 2023 Pantone Colors Chart. All rights reserved.</p>
          <p>Contact Us: <a href="mailto:info@pantonecolors.com" className="text-blue-600 hover:underline">info@pantonecolors.com</a></p>
=======
          <div>
            <h3 className="font-bold mb-2">Contact Us</h3>
            <p className="text-sm">Email: info@pantonecolors.com</p>
            <p className="text-sm">Phone: +1 (123) 456-7890</p>
          </div>
        </div>
        <div className="bg-gray-200 py-2 text-center text-sm">
          © 2023 Pantone Colors Chart. All rights reserved.
>>>>>>> parent of 041be38 (多语言脚本)
>>>>>>> 7cde95fd5fb83df98a42d6f40fbb37756b0a7ac0
>>>>>>> parent of 67bdaa3 (1020)
        </div>
      </footer>
    </div>
  );
}