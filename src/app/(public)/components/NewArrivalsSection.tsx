'use client';

import React from 'react';
import Link from 'next/link';
import { useDictionary } from '@/dictionary/LanguageContext';
import { BookCard } from '@/components/public/BookCard';
import { ArrowRightOutlined } from '@ant-design/icons';

export function NewArrivalsSection() {
  const dict = useDictionary();

  const newArrivalsData = [
    {
      slug: 'the-midnight-library',
      title: 'The Midnight Library',
      author: 'Matt Haig',
      authorSlug: 'matt-haig',
      price: '$24.99',
      coverImage: '/images/new_arrival_1.png',
      rating: 5,
      badge: 'NEW',
      badgeVariant: 'accent' as const,
    },
    {
      slug: 'tomorrow-and-tomorrow-and-tomorrow',
      title: 'Tomorrow, and Tomorrow, and Tomorrow',
      author: 'Gabrielle Zevin',
      authorSlug: 'gabrielle-zevin',
      price: '$28.00',
      coverImage: '/images/new_arrival_2.png',
      rating: 5,
      badge: 'POPULAR',
      badgeVariant: 'accent' as const,
    },
    {
      slug: 'project-hail-mary',
      title: 'Project Hail Mary',
      author: 'Andy Weir',
      authorSlug: 'andy-weir',
      price: '$29.95',
      coverImage: '/images/new_arrival_3.png',
      rating: 5,
      badge: 'STAFF PICK',
      badgeVariant: 'accent' as const,
    },
    {
      slug: 'klara-and-the-sun',
      title: 'Klara and the Sun',
      author: 'Kazuo Ishiguro',
      authorSlug: 'kazuo-ishiguro',
      price: '$26.50',
      coverImage: '/images/new_arrival_4.png',
      rating: 4.5,
      badge: 'ACCLAIMED',
      badgeVariant: 'accent' as const,
    },
  ];

  return (
    <section className="w-full py-12 sm:py-16 bg-background">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-[#030220] tracking-tight">
              {dict.newArrivals.title}
            </h2>
          </div>
          <Link
            href="/books"
            className="group inline-flex items-center gap-1.5 font-button text-xs font-bold uppercase tracking-wider text-accent hover:text-accent/80 transition-colors"
          >
            <span>{dict.newArrivals.viewAll}</span>
            <ArrowRightOutlined className="text-xs transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* 4-column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newArrivalsData.map((book) => (
            <BookCard key={book.slug} {...book} />
          ))}
        </div>
      </div>
    </section>
  );
}
