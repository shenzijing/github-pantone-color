export interface PantoneColor {
  id: number;
  name: string;
  hex: string;
}

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
}