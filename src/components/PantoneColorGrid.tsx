import React, { useState, useMemo } from 'react';
import pantoneColors from '../data/pantoneColors';
import { Search, Copy, Check } from 'lucide-react';

const ITEMS_PER_PAGE = 100;

const PantoneColorGrid: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [copiedColor, setCopiedColor] = useState<string | null>(null);
  const [activeSearchTerm, setActiveSearchTerm] = useState('');

  const filteredColors = useMemo(() => {
    return pantoneColors.filter(color =>
      color.name.toLowerCase().includes(activeSearchTerm.toLowerCase()) ||
      color.hex.toLowerCase().includes(activeSearchTerm.toLowerCase()) ||
      color.rgb.join(',').includes(activeSearchTerm)
    );
  }, [activeSearchTerm]);

  const totalPages = Math.ceil(filteredColors.length / ITEMS_PER_PAGE);
  const paginatedColors = filteredColors.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const copyToClipboard = (text: string, colorId: number) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedColor(colorId.toString());
      setTimeout(() => setCopiedColor(null), 2000);
    });
  };

  const handleSearch = () => {
    setActiveSearchTerm(searchTerm);
    setCurrentPage(1);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center my-8">Pantone Colors Chart</h1>

      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <p className="text-lg text-center mb-4">
          Welcome to our Pantone Colors Chart. This website provides a comprehensive collection of Pantone colors for your reference and inspiration.
        </p>
        <p className="text-sm text-gray-600 text-center">
          <strong>Disclaimer:</strong> This website is not affiliated with, endorsed by, or officially connected to Pantone LLC. The Pantone colors displayed here are for reference purposes only and may not accurately represent official Pantone color standards.
        </p>
      </div>

      <div className="mb-8">
        <input
          type="text"
          placeholder="Search Pantone colors..."
          className="w-full p-2 border border-gray-300 rounded"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition-colors"
        >
          Search
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-4">
        {paginatedColors.map((color) => (
          <div
            key={color.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div
              className="h-24"
              style={{ backgroundColor: color.hex }}
            ></div>
            <div className="p-3">
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
              <div className="flex items-center justify-between mt-1">
                <p className="text-xs text-gray-600">RGB: {color.rgb.join(', ')}</p>
                <button
                  onClick={() => copyToClipboard(`rgb(${color.rgb.join(', ')})`, -color.id)}
                  className="text-gray-500 hover:text-gray-700"
                  title="Copy RGB"
                >
                  {copiedColor === (-color.id).toString() ? (
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
      <div className="mt-8 flex justify-center">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md mr-2 disabled:bg-gray-300"
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="px-4 py-2">
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md ml-2 disabled:bg-gray-300"
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PantoneColorGrid;
