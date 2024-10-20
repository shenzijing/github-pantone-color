import Link from 'next/link'
import LanguageSwitcher from './LanguageSwitcher'

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">Pantone Colors Chart</Link>
          <nav>
            <ul className="flex space-x-4">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><LanguageSwitcher /></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}