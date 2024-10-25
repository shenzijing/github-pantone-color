'use client';

import { useState, useMemo } from 'react';
import { ColorCard } from '@/components/ColorCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, ChevronLeft, ChevronRight } from 'lucide-react';
import { PantoneColor } from '@/lib/colors';
import { useTranslation } from '@/hooks/useTranslation';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import { usePathname } from 'next/navigation';
import { i18n } from '@/lib/i18n';

interface ColorGridProps {
  colors: PantoneColor[];
}

const COLORS_PER_PAGE = 100;

export function ColorGrid({ colors }: ColorGridProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [jumpToPage, setJumpToPage] = useState('');
  const pathname = usePathname();
  const pathParts = pathname.split('/').filter(Boolean);
  const currentLang = i18n.locales.includes(pathParts[0]) ? pathParts[0] : i18n.defaultLocale;
  const { t } = useTranslation(currentLang);

  const filteredColors = useMemo(() => {
    if (!searchTerm.trim()) return colors;
    return colors.filter(color =>
      color.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [colors, searchTerm]);

  const totalPages = Math.ceil(filteredColors.length / COLORS_PER_PAGE);
  const startIndex = (currentPage - 1) * COLORS_PER_PAGE;
  const endIndex = startIndex + COLORS_PER_PAGE;
  const currentColors = filteredColors.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleJumpToPage = () => {
    const pageNumber = parseInt(jumpToPage);
    if (!isNaN(pageNumber) && pageNumber >= 1 && pageNumber <= totalPages) {
      handlePageChange(pageNumber);
      setJumpToPage('');
    }
  };

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div>
      <div className="flex mb-4">
        <Input
          type="text"
          placeholder={t('searchPlaceholder')}
          className="mr-2"
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
        />
        <Button variant="outline" aria-label={t('search')}>
          <Search className="h-4 w-4" />
        </Button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {currentColors.map((color) => (
          <ColorCard key={color.id} color={color} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="mt-8 flex flex-col items-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4 w-full max-w-2xl">
            <Pagination className="flex-1 flex justify-center">
              <PaginationContent>
                <PaginationItem>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="h-9 w-9"
                    aria-label={t('previous')}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                </PaginationItem>

                {getPageNumbers().map((page) => (
                  <PaginationItem key={page}>
                    <PaginationLink
                      onClick={() => handlePageChange(page)}
                      isActive={page === currentPage}
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                ))}

                <PaginationItem>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="h-9 w-9"
                    aria-label={t('next')}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </PaginationItem>
              </PaginationContent>
            </Pagination>

            <div className="flex items-center gap-2 min-w-[200px] justify-center">
              <Input
                type="number"
                min={1}
                max={totalPages}
                value={jumpToPage}
                onChange={(e) => setJumpToPage(e.target.value)}
                placeholder={`1-${totalPages}`}
                className="w-20"
                onKeyDown={(e) => e.key === 'Enter' && handleJumpToPage()}
              />
              <Button
                variant="outline"
                onClick={handleJumpToPage}
                disabled={!jumpToPage || parseInt(jumpToPage) < 1 || parseInt(jumpToPage) > totalPages}
                className="whitespace-nowrap"
              >
                {t('goToPage')}
              </Button>
            </div>
          </div>

          <p className="text-center text-sm text-gray-500">
            {t('showing')} {startIndex + 1}-{Math.min(endIndex, filteredColors.length)} {t('of')} {filteredColors.length} {t('colors')}
          </p>
        </div>
      )}
    </div>
  );
}