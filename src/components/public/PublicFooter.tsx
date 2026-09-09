'use client';

import React from 'react';
import Link from 'next/link';
import { useDictionary } from '@/dictionary/LanguageContext';

export function PublicFooter() {
  const dict = useDictionary();

  return (
    <footer className="w-full bg-surface border-t border-border mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-col items-center sm:items-start">
          <p className="text-xs text-text-secondary">
            © {new Date().getFullYear()} {dict.public.footerCopyright}
          </p>
          <p className="font-label text-[11px] text-text-secondary uppercase tracking-widest mt-1">
            {dict.public.footerActiveTheme}
          </p>
        </div>

        <div className="flex items-center space-x-6">
          <Link
            href="/admin/login"
            className="text-xs font-button uppercase tracking-wider text-text-secondary hover:text-text-primary transition-colors"
          >
            {dict.common.login}
          </Link>
          <span className="text-xs text-border">•</span>
          <a
            href="https://ant.design"
            target="_blank"
            rel="noreferrer"
            className="text-xs text-text-secondary hover:text-text-primary transition-colors"
          >
            Ant Design
          </a>
          <span className="text-xs text-border">•</span>
          <a
            href="https://tailwindcss.com"
            target="_blank"
            rel="noreferrer"
            className="text-xs text-text-secondary hover:text-text-primary transition-colors"
          >
            Tailwind CSS
          </a>
        </div>
      </div>
    </footer>
  );
}
