'use client';

import React from 'react';
import { useDictionary } from '@/dictionary/LanguageContext';
import { BookCard } from '@/components/public/BookCard';

export function BestsellersSection() {
  const dict = useDictionary();

  const bestsellers = [
    {
      slug: 'the-great-gatsby',
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      authorSlug: 'f-scott-fitzgerald',
      price: '$15.99',
      coverImage: '/images/bestseller_gatsby.png',
      rating: 5,
      badge: 'TOP RATED',
      badgeVariant: 'accent' as const,
    },
    {
      slug: '1984',
      title: '1984',
      author: 'George Orwell',
      authorSlug: 'george-orwell',
      price: '$12.50',
      coverImage: '/images/bestseller_1984.png',
      rating: 5,
      badge: '#1 BESTSELLER',
      badgeVariant: 'accent' as const,
    },
    {
      slug: 'to-kill-a-mockingbird',
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      authorSlug: 'harper-lee',
      price: '$14.00',
      coverImage: '/images/bestseller_mockingbird.png',
      rating: 5,
      badge: 'TOP RATED',
      badgeVariant: 'accent' as const,
    },
    {
      slug: 'pride-and-prejudice',
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      authorSlug: 'jane-austen',
      price: '$11.20',
      coverImage: '/images/bestseller_pride.png',
      rating: 5,
      badge: '#1 BESTSELLER',
      badgeVariant: 'accent' as const,
    },
    {
      slug: 'the-catcher-in-the-rye',
      title: 'The Catcher in the Rye',
      author: 'J.D. Salinger',
      authorSlug: 'jd-salinger',
      price: '$13.75',
      coverImage: '/images/bestseller_catcher.png',
      rating: 5,
      badge: 'TOP RATED',
      badgeVariant: 'accent' as const,
    },
  ];

  return (
    <section className="w-full py-16 sm:py-20 bg-background">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-[#030220] tracking-tight flex items-center gap-2">
            <span>{dict.bestsellers.title}</span>
          </h2>
          <p className="font-body text-sm text-[#585F6C] mt-1">
            {dict.bestsellers.subtitle}
          </p>
        </div>

        {/* 5-card responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {bestsellers.map((book) => (
            <BookCard key={book.slug} {...book} />
          ))}
        </div>
      </div>
    </section>
  );
}
