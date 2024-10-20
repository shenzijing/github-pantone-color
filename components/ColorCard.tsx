"use client";

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import { PantoneColor } from '@/lib/colors';
import { Copy } from 'lucide-react';

interface ColorCardProps {
  color: PantoneColor;
}

export function ColorCard({ color }: ColorCardProps) {
  const [copied, setCopied] = useState('');
  const textColor = isLightColor(color.hex) ? 'text-black' : 'text-white';

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(''), 2000);
  };

  const CopyButton = ({ value, type }: { value: string, type: string }) => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className={cn("h-6 w-6", textColor)}
            onClick={() => copyToClipboard(value, type)}
          >
            <Copy className="h-3 w-3" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{copied === type ? 'Copied!' : `Copy ${type}`}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div
          className={cn("h-48 flex flex-col justify-end p-2", textColor)}
          style={{ backgroundColor: color.hex }}
        >
          <p className="font-semibold mb-2">{color.name}</p>
          <div className="flex items-center justify-between">
            <p className="text-sm">HEX: {color.hex}</p>
            <CopyButton value={color.hex} type="HEX" />
          </div>
          <div className="flex items-center justify-between">
            <p className="text-xs">RGB: {color.rgb.join(', ')}</p>
            <CopyButton value={color.rgb.join(', ')} type="RGB" />
          </div>
          <div className="flex items-center justify-between">
            <p className="text-xs">CMYK: {color.cmyk.join(', ')}</p>
            <CopyButton value={color.cmyk.join(', ')} type="CMYK" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function isLightColor(hex: string) {
  const rgb = parseInt(hex.slice(1), 16);
  const r = (rgb >> 16) & 0xff;
  const g = (rgb >> 8) & 0xff;
  const b = (rgb >> 0) & 0xff;
  const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return luma > 128;
}