import { PantoneColor } from '../types';

// Helper function to convert hex to RGB
function hexToRgb(hex: string): number[] {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return [r, g, b];
}

// Helper function to convert RGB to CMYK
function rgbToCmyk(r: number, g: number, b: number): number[] {
  let c = 1 - r / 255;
  let m = 1 - g / 255;
  let y = 1 - b / 255;
  let k = Math.min(c, m, y);
  
  c = Math.round(((c - k) / (1 - k)) * 100) || 0;
  m = Math.round(((m - k) / (1 - k)) * 100) || 0;
  y = Math.round(((y - k) / (1 - k)) * 100) || 0;
  k = Math.round(k * 100);
  
  return [c, m, y, k];
}

const pantoneColors: PantoneColor[] = [
  { id: 1, name: "Pantone 100 C", hex: "#F4ED7C" },
  { id: 2, name: "Pantone 101 C", hex: "#F4ED47" },
  { id: 3, name: "Pantone 102 C", hex: "#F9E814" },
  // Add more Pantone colors here...
  { id: 100, name: "Pantone 2365 C", hex: "#EABEDB" }
].map(color => {
  const rgb = hexToRgb(color.hex);
  const cmyk = rgbToCmyk(...rgb);
  return { ...color, rgb, cmyk };
});

export default pantoneColors;