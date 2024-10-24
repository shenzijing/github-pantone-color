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
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface ColorGridProps {
  colors: PantoneColor[];
}

const COLORS_PER_PAGE = 100;

export function ColorGrid({ colors }: ColorGridProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const { t } = useTranslation();

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

  // Handle search
  const handleSearch = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1); // Reset to first page when searching
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
        <Button variant="outline">
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
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                />
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
                <PaginationNext
                  onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                  className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>

          <p className="text-center text-sm text-gray-500 mt-2">
            {t('showing')} {startIndex + 1}-{Math.min(endIndex, filteredColors.length)} {t('of')} {filteredColors.length} {t('colors')}
          </p>
        </div>
      )}
    </div>
  );
}
