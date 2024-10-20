import 'server-only';

const dictionaries = {
  en: () => import('@/dictionaries/en.json').then(module => module.default),
  es: () => import('@/dictionaries/es.json').then(module => module.default),
  fr: () => import('@/dictionaries/fr.json').then(module => module.default),
  de: () => import('@/dictionaries/de.json').then(module => module.default),
  it: () => import('@/dictionaries/it.json').then(module => module.default),
};

export const getDictionary = async (locale: string) => {
  if (!(locale in dictionaries)) {
    locale = 'en'; // Default to English if the locale is not found
  }
  return dictionaries[locale as keyof typeof dictionaries]();
};