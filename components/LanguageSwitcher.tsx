'use client'

import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'

export default function LanguageSwitcher() {
  const router = useRouter()
  const pathname = usePathname()

  const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const locale = e.target.value
    router.push(pathname, { locale })
  }

  return (
    <select
      onChange={changeLanguage}
      className="bg-white border border-gray-300 rounded-md px-2 py-1 text-sm"
    >
      <option value="en">English</option>
      <option value="es">Español</option>
      <option value="fr">Français</option>
      <option value="de">Deutsch</option>
    </select>
  )
}