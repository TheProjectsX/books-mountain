'use client';

import React from 'react';
import { useLanguage } from '@/dictionary/LanguageContext';
import { GlobalOutlined } from '@ant-design/icons';

interface LanguageToggleProps {
  compact?: boolean;
  showIcon?: boolean;
  className?: string;
}

export function LanguageToggle({
  compact = false,
  showIcon = true,
  className = '',
}: LanguageToggleProps) {
  const { locale, setLocale } = useLanguage();

  return (
    <div
      className={`inline-flex items-center bg-surface-container rounded-sm p-0.5 border border-border text-xs font-button ${className}`}
      role="group"
      aria-label="Language selection"
    >
      {showIcon && (
        <span className="px-2 text-text-secondary">
          <GlobalOutlined className="text-xs" />
        </span>
      )}
      <button
        type="button"
        onClick={() => setLocale('en')}
        className={`px-2.5 py-1 rounded-xs uppercase tracking-wider font-semibold transition-all ${
          locale === 'en'
            ? 'bg-primary text-on-primary shadow-2xs'
            : 'text-text-secondary hover:text-text-primary hover:bg-surface'
        }`}
        aria-pressed={locale === 'en'}
      >
        {compact ? 'EN' : 'English'}
      </button>

      <button
        type="button"
        onClick={() => setLocale('bn')}
        className={`px-2.5 py-1 rounded-xs tracking-wide font-medium transition-all ${
          locale === 'bn'
            ? 'bg-primary text-on-primary shadow-2xs'
            : 'text-text-secondary hover:text-text-primary hover:bg-surface'
        }`}
        aria-pressed={locale === 'bn'}
      >
        {compact ? 'বাং' : 'বাংলা'}
      </button>
    </div>
  );
}
