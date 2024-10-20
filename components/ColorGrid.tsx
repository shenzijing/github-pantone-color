"use client";

import { useState } from 'react';
import { ColorCard } from '@/components/ColorCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { PantoneColor } from '@/lib/colors';
<<<<<<< HEAD
=======
import { useTranslation } from '@/hooks/useTranslation';
>>>>>>> 7cde95fd5fb83df98a42d6f40fbb37756b0a7ac0

interface ColorGridProps {
  colors: PantoneColor[];
}

export function ColorGrid({ colors }: ColorGridProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredColors, setFilteredColors] = useState<PantoneColor[]>(colors);
<<<<<<< HEAD
=======
  const { t } = useTranslation();
>>>>>>> 7cde95fd5fb83df98a42d6f40fbb37756b0a7ac0

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
<<<<<<< HEAD
          placeholder="Search colors..."
=======
          placeholder={t('searchPlaceholder')}
>>>>>>> 7cde95fd5fb83df98a42d6f40fbb37756b0a7ac0
          className="mr-2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
        />
        <Button onClick={handleSearch}>
          <Search className="h-4 w-4 mr-2" />
<<<<<<< HEAD
          Search
=======
          {t('search')}
>>>>>>> 7cde95fd5fb83df98a42d6f40fbb37756b0a7ac0
        </Button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {filteredColors.map((color) => (
          <ColorCard key={color.id} color={color} />
        ))}
      </div>
    </div>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> 7cde95fd5fb83df98a42d6f40fbb37756b0a7ac0
