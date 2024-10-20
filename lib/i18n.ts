export const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'es', 'fr', 'de', 'it'],
};

export const getLanguageName = (code: string) => {
  const names: { [key: string]: string } = {
    en: 'English',
    es: 'Español',
    fr: 'Français',
    de: 'Deutsch',
    it: 'Italiano',
  };
  return names[code] || code;
};