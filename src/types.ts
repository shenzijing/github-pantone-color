export interface PantoneColor {
  id: number;
  name: string;
  hex: string;
  rgb: number[];
  cmyk: number[];
}

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
}

declare global {
  interface Window {
    initialI18nStore: any;
    initialLanguage: string;
  }
}