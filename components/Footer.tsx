import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h2 className="text-lg font-semibold mb-3">About Us</h2>
            <p className="text-gray-400">We offer a comprehensive collection of Pantone colors for reference purposes.</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-3">Quick Links</h2>
            <ul className="text-gray-400 space-y-2">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-3">Contact Us</h2>
            <p className="text-gray-400">Email: info@pantonecolors.net</p>
          </div>
        </div>
        <div className="mt-6 border-t border-gray-700 pt-6 text-center text-gray-400">
          <p>© 2024 Color Chart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}