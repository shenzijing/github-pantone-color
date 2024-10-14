import React, { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import pantoneColors from '../data/pantoneColors';
import { Search, Copy, Check } from 'lucide-react';

const ITEMS_PER_PAGE = 100;

const PantoneColorGrid: React.FC = () => {
  const { t } = useTranslation();
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
    <div>
      <h1 className="text-4xl font-bold mb-4">{t('Pantone Colors Chart')}</h1>
      <p className="mb-4">{t('websiteDescription')}</p>
      <p className="mb-8 text-sm text-gray-600 italic">{t('disclaimer')}</p>

      <div className="mb-4 relative flex">
        <input
          type="text"
          placeholder={t('searchPantoneColors')}
          className="w-full p-2 pl-10 border rounded-l-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition-colors"
        >
          {t('search')}
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
          {t('previous')}
        </button>
        <span className="px-4 py-2">
          {t('page')} {currentPage} {t('of')} {totalPages}
        </span>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md ml-2 disabled:bg-gray-300"
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          {t('next')}
        </button>
      </div>
    </div>
  );
};

export default PantoneColorGrid;