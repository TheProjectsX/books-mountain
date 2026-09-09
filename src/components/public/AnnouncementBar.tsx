'use client';

import React from 'react';
import { useDictionary } from '@/dictionary/LanguageContext';
import { TruckOutlined } from '@ant-design/icons';

export function AnnouncementBar() {
  const dict = useDictionary();

  return (
    <div className="w-full bg-[#1B1B3A] text-white text-[12px] font-button tracking-[0.1em] uppercase py-2 px-4 sm:px-8 border-b border-[#2b2b52] z-50">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between">
        {/* Left: Free Shipping */}
        <div className="flex items-center gap-2">
          <TruckOutlined className="text-sm text-white" />
          <span className="font-medium text-white/95">
            {dict.announcement.freeShipping}
          </span>
        </div>

        {/* Right: Follow on Facebook */}
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-white/90 hover:text-accent transition-colors font-medium"
        >
          <span>{dict.announcement.followFacebook}</span>
          <svg
            className="w-3.5 h-3.5 fill-current"
            viewBox="0 0 24 24"
          >
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        </a>
      </div>
    </div>
  );
}
