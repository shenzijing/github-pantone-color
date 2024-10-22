import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Layout } from '@/components/Layout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Pantone Colors Chart | Complete Collection of Pantone Colors',
  description: 'Explore the complete Pantone color chart with codes and swatches. Find the perfect colors with Pantone, including RGB and HEX values for design and printing projects.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}