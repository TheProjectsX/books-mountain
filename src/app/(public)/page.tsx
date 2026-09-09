'use client';

import React from 'react';
import Link from 'next/link';
import { ThemeShowcase } from '@/components/public/ThemeShowcase';
import { useDictionary, useLanguage } from '@/dictionary/LanguageContext';

export default function PublicHomePage() {
  const dict = useDictionary();
  const { locale } = useLanguage();

  const placeholderBooks = [
    {
      title: locale === 'bn' ? 'দ্য আর্কিটেকচার অব সলিটিউড' : 'The Architecture of Solitude',
      category: locale === 'bn' ? 'স্থাপত্য তত্ত্ব' : 'ARCHITECTURAL THEORY',
      author: locale === 'bn' ? 'ই. ভ্যান্স' : 'E. Vance',
      price: '৳ ২,৪০০.০০',
      description:
        locale === 'bn'
          ? 'আধুনিক ব্রুটালিজম, টাইপোগ্রাফি এবং শান্ত গৃহস্থালি স্থানের উপর একটি সম্পাদকীয় অন্বেষণ।'
          : 'An editorial exploration into modern brutalism, typography, and quiet domestic spaces.',
    },
    {
      title: locale === 'bn' ? 'টাইপোগ্রাফি ও হোয়াইট স্পেস' : 'Typography & White Space',
      category: locale === 'bn' ? 'ডিজাইন মনোগ্রাফ' : 'DESIGN MONOGRAPH',
      author: locale === 'bn' ? 'এম. এস. রহমান' : 'M. S. Rahman',
      price: '৳ ৩,২০০.০০',
      description:
        locale === 'bn'
          ? 'ডিজিটাল সাহিত্যে মাইক্রো-টাইপোগ্রাফি, ছন্দ এবং গ্রিড ডিজাইনের একটি বিস্তৃত নির্দেশিকা।'
          : 'A comprehensive guide to micro-typography, rhythm, and grid design in digital literature.',
    },
    {
      title: locale === 'bn' ? 'মিনিমালিস্ট ডিজাইন সিস্টেমস' : 'Minimalist Design Systems',
      category: locale === 'bn' ? 'ডিজিটাল ক্রাফট' : 'DIGITAL CRAFT',
      author: locale === 'bn' ? 'এ. লরেন্ট' : 'A. Laurent',
      price: '৳ ১,৮৫০.০০',
      description:
        locale === 'bn'
          ? 'সম্পাদকীয় নান্দনিকতাকে কাঠামোগত উপাদান সিস্টেম এবং ডিজাইন টোকেনে রূপান্তর করা।'
          : 'Translating editorial aesthetics into structured component systems and design tokens.',
    },
  ];

  return (
    <div className="space-y-12 sm:space-y-16">
      {/* Hero Section */}
      <section className="bg-surface rounded-lg border border-border p-8 sm:p-12 shadow-xs">
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-surface-container rounded-sm border border-border mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="font-label text-xs uppercase tracking-widest text-text-secondary">
              {dict.public.badge}
            </span>
          </div>

          <h1 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-text-primary leading-tight">
            {dict.public.heroTitle}
          </h1>

          <p className="font-body text-base sm:text-lg text-text-secondary mt-4 leading-relaxed">
            {dict.public.heroSubtitle}
          </p>

          <div className="mt-8 flex flex-wrap gap-4 items-center">
            <Link
              href="/admin"
              className="inline-flex items-center justify-center px-6 py-3 font-button text-sm font-semibold tracking-wider uppercase text-on-primary bg-primary hover:bg-primary-container rounded-sm transition-all shadow-sm"
            >
              {dict.public.openAdmin}
            </Link>
            <a
              href="#catalog"
              className="inline-flex items-center justify-center px-6 py-3 font-button text-sm font-semibold tracking-wider uppercase text-text-primary bg-surface hover:bg-surface-container border border-border rounded-sm transition-all"
            >
              {dict.public.viewSample}
            </a>
          </div>
        </div>
      </section>

      {/* Placeholder Content Section */}
      <section id="catalog" className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <span className="font-label text-xs uppercase tracking-widest text-text-secondary">
              {dict.public.sampleWorksSubtitle}
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-text-primary mt-1">
              {dict.public.sampleWorks}
            </h2>
          </div>
          <p className="text-xs font-label uppercase tracking-wider text-text-secondary">
            Structured for MongoDB Prisma Models
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {placeholderBooks.map((book) => (
            <article
              key={book.title}
              className="bg-surface rounded-lg border border-border p-6 flex flex-col justify-between hover:border-secondary transition-colors"
            >
              <div>
                <span className="font-label text-[11px] uppercase tracking-widest text-secondary font-semibold">
                  {book.category}
                </span>
                <h3 className="font-heading text-lg font-bold text-text-primary mt-2">
                  {book.title}
                </h3>
                <p className="text-xs text-text-secondary mt-1">By {book.author}</p>
                <p className="font-body text-sm text-text-secondary mt-3 leading-relaxed">
                  {book.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                <span className="font-heading font-bold text-base text-text-primary">
                  {book.price}
                </span>
                <span className="font-label text-xs uppercase tracking-wider text-accent font-semibold">
                  {dict.common.inStock}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Live Design System Inspection */}
      <ThemeShowcase />
    </div>
  );
}
