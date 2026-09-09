'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useDictionary } from '@/dictionary/LanguageContext';

export interface CategoryPillsProps {
  activeCategory?: string;
  onSelectCategory?: (cat: string) => void;
}

export function CategoryPills({
  activeCategory: propActive,
  onSelectCategory,
}: CategoryPillsProps) {
  const dict = useDictionary();
  const [internalActive, setInternalActive] = useState('Fiction');
  const active = propActive || internalActive;

  const categories = [
    { key: 'Fiction', label: dict.categories.fiction, href: '/books?category=Fiction' },
    { key: 'Non-Fiction', label: dict.categories.nonFiction, href: '/books?category=Non-Fiction' },
    { key: 'Science Fiction', label: dict.categories.sciFi, href: '/books?category=Science-Fiction' },
    { key: 'Fantasy', label: dict.categories.fantasy, href: '/books?category=Fantasy' },
    { key: 'Biography', label: dict.categories.biography, href: '/books?category=Biography' },
    { key: 'History', label: dict.categories.history, href: '/books?category=History' },
    { key: 'Mystery', label: dict.categories.mystery, href: '/books?category=Mystery' },
    { key: 'Romance', label: dict.categories.romance, href: '/books?category=Romance' },
    { key: 'Thriller', label: dict.categories.thriller, href: '/books?category=Thriller' },
    { key: 'Young Adult', label: dict.categories.youngAdult, href: '/books?category=Young-Adult' },
  ];

  const handleSelect = (key: string) => {
    setInternalActive(key);
    if (onSelectCategory) {
      onSelectCategory(key);
    }
  };

  return (
    <div className="w-full border-b border-[#E2E2E4] bg-surface">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 py-6">
        <div
          className="flex items-center gap-2.5 overflow-x-auto no-scrollbar pb-1"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {categories.map((cat) => {
            const isSelected = active === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => handleSelect(cat.key)}
                className={`whitespace-nowrap px-5 py-2 rounded-full font-button text-xs tracking-wider uppercase transition-all duration-200 border ${
                  isSelected
                    ? 'bg-accent border-accent text-white shadow-xs font-semibold'
                    : 'bg-white border-[#E2E2E4] text-[#030220] hover:bg-[#F3F3F5] font-medium'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
