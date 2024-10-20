import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pantone Colors Chart',
  description: 'Explore the complete Pantone color chart with codes and swatches.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow container mx-auto p-4">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}