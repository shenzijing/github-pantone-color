'use client'

import { useState } from 'react'
import { Search, Copy, Check } from 'lucide-react'
import { pantoneColors } from '@/lib/colors'

const ITEMS_PER_PAGE = 20

export default function PantoneColorGrid() {
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState('')
  const [copiedColor, setCopiedColor] = useState<string | null>(null)

  const filteredColors = pantoneColors.filter(color =>
    color.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    color.hex.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const totalPages = Math.ceil(filteredColors.length / ITEMS_PER_PAGE)
  const paginatedColors = filteredColors.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  )

  const copyToClipboard = (text: string, colorId: number) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedColor(colorId.toString())
      setTimeout(() => setCopiedColor(null), 2000)
    })
  }

  return (
    <div>
      <div className="mb-4 relative flex">
        <input
          type="text"
          placeholder="Search Pantone colors..."
          className="w-full p-2 pl-10 border rounded-l-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition-colors"
        >
          Search
        </button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {paginatedColors.map((color) => (
          <div
            key={color.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div
              className="h-20"
              style={{ backgroundColor: color.hex }}
            ></div>
            <div className="p-2">
              <h3 className="font-semibold text-sm">{color.name}</h3>
              <div className="flex items-center justify-between mt-1">
                <p className="text-xs text-gray-600">{color.hex}</p>
                <button
                  onClick={() => copyToClipboard(color.hex, color.id)}
                  className="text-gray-500 hover:text-gray-700"
                  title="Copy HEX"
                >
                  {copiedColor === color.id.toString() ? (
                    <Check size={14} className="text-green-500" />
                  ) : (
                    <Copy size={14} />
                  )}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-center">
        <button
          className="px-3 py-1 bg-blue-500 text-white rounded-md mr-2 disabled:bg-gray-300"
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="px-3 py-1">
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="px-3 py-1 bg-blue-500 text-white rounded-md ml-2 disabled:bg-gray-300"
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  )
}