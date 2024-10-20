export const translations = {
  en: {
    "home": "Home",
    "blog": "Blog",
    "search": "Search",
    "searchPlaceholder": "Search colors...",
    "aboutUs": "About Us",
    "aboutUsContent": "We are passionate about colors and their impact on design and creativity.",
    "quickLinks": "Quick Links",
    "privacyPolicy": "Privacy Policy",
    "termsOfService": "Terms of Service",
    "copyright": "© 2023 Pantone Colors Chart. All rights reserved.",
    "contactUs": "Contact Us",
    "pantoneColorsChart": "Pantone Colors Chart",
    "exploreColors": "Explore our comprehensive collection of Pantone colors. Find the perfect hue for your design projects with our easy-to-use color chart featuring HEX, RGB, and CMYK values.",
  },
  // Other languages will be added by the translation script
};

export type TranslationKey = keyof typeof translations.en;

export function getTranslation(lang: string, key: TranslationKey): string {
  return translations[lang as keyof typeof translations]?.[key] || translations.en[key];
}