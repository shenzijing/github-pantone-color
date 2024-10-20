"use client";

import { useState } from 'react';
import { ColorCard } from '@/components/ColorCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { PantoneColor } from '@/lib/colors';
import { useTranslation } from '@/hooks/useTranslation';

interface ColorGridProps {
  colors: PantoneColor[];
}

export function ColorGrid({ colors }: ColorGridProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredColors, setFilteredColors] = useState<PantoneColor[]>(colors);
  const { t } = useTranslation();

  const handleSearch = () => {
    const filtered = colors.filter(color =>
      color.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredColors(filtered);
  };

  return (
    <div>
      <div className="flex mb-4">
        <Input
          type="text"
          placeholder={t('searchPlaceholder')}
          className="mr-2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
        />
        <Button onClick={handleSearch}>
          <Search className="h-4 w-4 mr-2" />
          {t('search')}
        </Button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {filteredColors.map((color) => (
          <ColorCard key={color.id} color={color} />
        ))}
      </div>
    </div>
  );
}