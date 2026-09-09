import { Dictionary, Locale } from './types';
import { enDictionary } from './en';
import { bnDictionary } from './bn';

export * from './types';
export { enDictionary } from './en';
export { bnDictionary } from './bn';

export const defaultLocale: Locale = 'en';
export const availableLocales: Locale[] = ['en', 'bn'];

export const localeLabels: Record<Locale, { label: string; nativeName: string }> = {
  en: { label: 'English', nativeName: 'English' },
  bn: { label: 'Bengali', nativeName: 'বাংলা' },
};

export const dictionaries: Record<Locale, Dictionary> = {
  en: enDictionary,
  bn: bnDictionary,
};

/**
 * Server and Client helper to retrieve dictionary for a specific locale
 */
export function getDictionary(locale?: Locale | string): Dictionary {
  if (locale === 'bn') {
    return bnDictionary;
  }
  return enDictionary;
}

/**
 * Helper to resolve nested dot-notation paths (e.g. 'common.appName', 'public.heroTitle')
 */
export function getDictionaryValue(
  dict: Dictionary,
  path: string,
  fallback?: string
): string {
  const keys = path.split('.');
  let current: any = dict;

  for (const key of keys) {
    if (current && typeof current === 'object' && key in current) {
      current = current[key];
    } else {
      return fallback || path;
    }
  }

  return typeof current === 'string' ? current : fallback || path;
}
