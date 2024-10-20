import '../globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Layout } from '@/components/Layout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Pantone Colors Showcase',
  description: 'A beautiful display of Pantone colors',
};

export default function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html lang={lang}>
      <body className={inter.className}>
        <Layout lang={lang}>{children}</Layout>
      </body>
    </html>
  );
}