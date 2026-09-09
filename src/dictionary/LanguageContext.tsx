'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { Locale, Dictionary } from './types';
import { getDictionary, getDictionaryValue, defaultLocale, dictionaries } from './index';

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  dict: Dictionary;
  t: (path: string, fallback?: string) => string;
}

const STORAGE_KEY = 'books_mountain_locale';

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({
  children,
  initialLocale = defaultLocale,
}: {
  children: React.ReactNode;
  initialLocale?: Locale;
}) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);

  // Sync with localStorage on client mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Locale;
      if (saved && (saved === 'en' || saved === 'bn')) {
        setLocaleState(saved);
        document.documentElement.lang = saved;
      }
    } catch {
      // Ignore localStorage access issues
    }
  }, []);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    try {
      localStorage.setItem(STORAGE_KEY, newLocale);
      document.documentElement.lang = newLocale;
    } catch {
      // Ignore
    }
  }, []);

  const toggleLocale = useCallback(() => {
    const nextLocale: Locale = locale === 'en' ? 'bn' : 'en';
    setLocale(nextLocale);
  }, [locale, setLocale]);

  const dict = dictionaries[locale] || dictionaries[defaultLocale];

  const t = useCallback(
    (path: string, fallback?: string) => {
      return getDictionaryValue(dict, path, fallback);
    },
    [dict]
  );

  return (
    <LanguageContext.Provider value={{ locale, setLocale, toggleLocale, dict, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

/**
 * Hook to access language state, toggle functions, and translation helpers
 */
export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

/**
 * Convenient shorthand hook to access the active dictionary directly
 */
export function useDictionary(): Dictionary {
  const { dict } = useLanguage();
  return dict;
}
