'use client';

import React from 'react';
import { useDictionary } from '@/dictionary/LanguageContext';
import { Rate } from 'antd';

export function ReaderReviewsSection() {
  const dict = useDictionary();

  const reviews = [
    {
      id: '1',
      quote: dict.reviews.review1Text,
      author: dict.reviews.review1Author,
      source: dict.reviews.viaFacebook,
      initials: 'SJ',
    },
    {
      id: '2',
      quote: dict.reviews.review2Text,
      author: dict.reviews.review2Author,
      source: dict.reviews.viaFacebook,
      initials: 'MC',
    },
    {
      id: '3',
      quote: dict.reviews.review3Text,
      author: dict.reviews.review3Author,
      source: dict.reviews.viaFacebook,
      initials: 'ER',
    },
  ];

  return (
    <section className="w-full py-16 sm:py-20 bg-[#F0F2F5] border-y border-[#E2E2E4]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-[#030220] tracking-tight">
            {dict.reviews.title}
          </h2>
          <p className="font-body text-sm text-[#585F6C] mt-2">
            {dict.reviews.subtitle}
          </p>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-surface rounded-lg border border-[#C8C5CE] p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
            >
              <div>
                {/* 5-star rating */}
                <div className="mb-4">
                  <Rate
                    disabled
                    defaultValue={5}
                    className="text-accent"
                    style={{ color: '#EE476F', fontSize: 16 }}
                  />
                </div>

                <p className="font-body text-sm text-[#47464D] italic leading-relaxed whitespace-pre-line">
                  {rev.quote}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-[#E2E2E4] flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1B1B3A] text-white flex items-center justify-center font-heading font-bold text-xs">
                  {rev.initials}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm text-[#030220]">
                    {rev.author}
                  </h3>
                  <span className="font-button text-[10px] font-bold tracking-widest text-[#585F6C] uppercase">
                    {rev.source}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
