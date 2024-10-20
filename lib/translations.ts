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
    // ... existing English translations ...
  },
  es: {
    // ... Spanish translations ...
  },
  fr: {
    // ... French translations ...
  },
  de: {
    // ... German translations ...
  },
  it: {
    // ... Italian translations ...
  }
};