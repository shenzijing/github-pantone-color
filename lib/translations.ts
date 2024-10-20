export type SupportedLanguages = 'en' | 'es' | 'fr' | 'de' | 'it';

export type TranslationKeys =
  | 'pantoneColorsChart'
  | 'exploreColors'
  | 'whatIsPantone'
  | 'pantoneDescription'
  | 'howToUsePantone'
  | 'pantoneUsage'
  | 'pantoneColorOfTheYear'
  | 'colorOfTheYearDescription'
  | 'pantoneVsOthers'
  | 'colorSystemsComparison'
  | 'faqs'
  | 'faqPurpose'
  | 'faqPurposeAnswer'
  | 'faqBranding'
  | 'faqBrandingAnswer'
  | 'faqPMS'
  | 'faqPMSAnswer'
  | 'faqColorOfYear'
  | 'faqColorOfYearAnswer'
  | 'faqWebDesign'
  | 'faqWebDesignAnswer'
  | 'disclaimer'
  | 'disclaimerText'
  | 'home'
  | 'blog'
  | 'search'
  | 'searchPlaceholder';

export type Translations = {
  [key in SupportedLanguages]: {
    [key in TranslationKeys]: string;
  };
};

export const translations: Translations = {
  en: {
    pantoneColorsChart: "Pantone Colors Chart",
    exploreColors: "Explore our comprehensive collection of Pantone colors. Find the perfect hue for your design projects with our easy-to-use color chart featuring HEX, RGB, and CMYK values.",
    whatIsPantone: "What is Pantone?",
    pantoneDescription: "Pantone is a color-matching system that helps designers and manufacturers ensure consistency in color across different materials and mediums.",
    howToUsePantone: "How to Use Pantone Colors",
    pantoneUsage: "Pantone colors are used in several ways across design, printing, and branding.",
    pantoneColorOfTheYear: "Pantone Color of the Year",
    colorOfTheYearDescription: "Each year, Pantone selects a Color of the Year that reflects global trends and cultural shifts.",
    pantoneVsOthers: "Pantone vs. CMYK vs. RGB vs. Hex",
    colorSystemsComparison: "Pantone is a standardized color-matching system used mostly in printing and branding.",
    faqs: "FAQs",
    faqPurpose: "What is the main purpose of Pantone colors?",
    faqPurposeAnswer: "Pantone colors ensure that the same color looks identical across various materials, screens, and products.",
    faqBranding: "Why are Pantone colors used in branding?",
    faqBrandingAnswer: "Pantone colors are popular in branding because they ensure consistency.",
    faqPMS: "What is the Pantone Matching System?",
    faqPMSAnswer: "The Pantone Matching System (PMS) is a standardized color-matching system used worldwide.",
    faqColorOfYear: "How often does Pantone choose a Color of the Year?",
    faqColorOfYearAnswer: "Pantone selects a new Color of the Year annually.",
    faqWebDesign: "Can I use Pantone colors in web design?",
    faqWebDesignAnswer: "Pantone colors are typically not used for web design because web colors are usually in RGB or Hex.",
    disclaimer: "Disclaimer",
    disclaimerText: "The Pantone Color Chart provided on this website is for reference purposes only.",
    home: "Home",
    blog: "Blog",
    search: "Search",
    searchPlaceholder: "Search colors..."
  },
  es: {
    // Spanish translations (add all keys with Spanish translations)
    pantoneColorsChart: "Tabla de colores Pantone",
    exploreColors: "Explora nuestra colección completa de colores Pantone...",
    // ... add all other keys with Spanish translations
  },
  fr: {
    // French translations (add all keys with French translations)
    pantoneColorsChart: "Nuancier Pantone",
    exploreColors: "Explorez notre collection complète de couleurs Pantone...",
    // ... add all other keys with French translations
  },
  de: {
    // German translations (add all keys with German translations)
    pantoneColorsChart: "Pantone-Farbkarte",
    exploreColors: "Entdecken Sie unsere umfassende Sammlung von Pantone-Farben...",
    // ... add all other keys with German translations
  },
  it: {
    // Italian translations (add all keys with Italian translations)
    pantoneColorsChart: "Tabella colori Pantone",
    exploreColors: "Esplora la nostra completa collezione di colori Pantone...",
    // ... add all other keys with Italian translations
  }
};