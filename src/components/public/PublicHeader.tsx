'use client';

import React from 'react';
import Link from 'next/link';
import { useDictionary } from '@/dictionary/LanguageContext';
import { LanguageToggle } from '@/components/common/LanguageToggle';

export function PublicHeader() {
  const dict = useDictionary();

  return (
    <header className="w-full bg-surface border-b border-border sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center space-x-3">
          <Link href="/" className="flex items-center space-x-2 group">
            <span className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center text-on-primary font-bold text-sm tracking-widest uppercase">
              BM
            </span>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-lg leading-tight text-text-primary group-hover:text-secondary transition-colors">
                {dict.common.appName}
              </span>
              <span className="font-label text-[10px] tracking-wider text-text-secondary uppercase">
                {dict.common.tagline}
              </span>
            </div>
          </Link>
        </div>

        {/* Navigation & Language Toggle */}
        <nav className="flex items-center space-x-3 sm:space-x-5">
          <Link
            href="/"
            className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
          >
            {dict.nav.home}
          </Link>
          <a
            href="#theme-tokens"
            className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors hidden sm:inline-block"
          >
            {dict.nav.designTokens}
          </a>

          {/* Language Toggle */}
          <LanguageToggle compact showIcon={false} />

          <Link
            href="/admin"
            className="inline-flex items-center justify-center px-3.5 py-1.5 text-xs font-button font-semibold tracking-wider uppercase text-on-primary bg-primary hover:bg-primary-container rounded-sm transition-all shadow-sm"
          >
            {dict.common.adminPortal}
          </Link>
        </nav>
      </div>
    </header>
  );
}
