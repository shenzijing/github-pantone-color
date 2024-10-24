'use client';

import { useState, useMemo } from 'react';
import { ColorCard } from '@/components/ColorCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { PantoneColor } from '@/lib/colors';
import { useTranslation } from '@/hooks/useTranslation';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { ComponentProps } from 'react';
import { usePathname } from 'next/navigation';
import { i18n } from '@/lib/i18n';

interface ColorGridProps {
  colors: PantoneColor[];
}

const COLORS_PER_PAGE = 100;

const CustomPaginationPrevious = ({ disabled, ...props }: ComponentProps<typeof PaginationPrevious> & { disabled?: boolean }) => (
  <PaginationPrevious
    {...props}
    className={`${props.className || ''} ${disabled ? 'pointer-events-none opacity-50' : ''}`}
    onClick={disabled ? undefined : props.onClick}
  />
);

const CustomPaginationNext = ({ disabled, ...props }: ComponentProps<typeof PaginationNext> & { disabled?: boolean }) => (
  <PaginationNext
    {...props}
    className={`${props.className || ''} ${disabled ? 'pointer-events-none opacity-50' : ''}`}
    onClick={disabled ? undefined : props.onClick}
  />
);

export function ColorGrid({ colors }: ColorGridProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [jumpToPage, setJumpToPage] = useState('');
  const pathname = usePathname();
  const pathParts = pathname.split('/').filter(Boolean);
  const currentLang = i18n.locales.includes(pathParts[0]) ? pathParts[0] : i18n.defaultLocale;
  const { t } = useTranslation(currentLang);

  // Memoize filtered colors to prevent unnecessary recalculations
  const filteredColors = useMemo(() => {
    if (!searchTerm.trim()) return colors;
    return colors.filter(color =>
      color.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [colors, searchTerm]);

  // Calculate pagination values
  const totalPages = Math.ceil(filteredColors.length / COLORS_PER_PAGE);
  const startIndex = (currentPage - 1) * COLORS_PER_PAGE;
  const endIndex = startIndex + COLORS_PER_PAGE;
  const currentColors = filteredColors.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle page jump
  const handleJumpToPage = () => {
    const pageNumber = parseInt(jumpToPage);
    if (!isNaN(pageNumber) && pageNumber >= 1 && pageNumber <= totalPages) {
      handlePageChange(pageNumber);
      setJumpToPage('');
    }
  };

  // Handle search
  const handleSearch = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  // Generate page numbers to display
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
        <div className="mt-8">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <CustomPaginationPrevious
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                  >
                    {t('previous')}
                  </CustomPaginationPrevious>
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
                  <CustomPaginationNext
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                  >
                    {t('next')}
                  </CustomPaginationNext>
                </PaginationItem>
              </PaginationContent>
            </Pagination>

            <div className="flex items-center gap-2">
              <Input
                type="number"
                min={1}
                max={totalPages}
                value={jumpToPage}
                onChange={(e) => setJumpToPage(e.target.value)}
                placeholder={t('enterPage')}
                className="w-24"
                onKeyDown={(e) => e.key === 'Enter' && handleJumpToPage()}
              />
              <Button
                variant="outline"
                onClick={handleJumpToPage}
                disabled={!jumpToPage || parseInt(jumpToPage) < 1 || parseInt(jumpToPage) > totalPages}
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