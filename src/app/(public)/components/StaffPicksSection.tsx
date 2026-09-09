'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useDictionary } from '@/dictionary/LanguageContext';
import { Button, message } from 'antd';
import { ShoppingCartOutlined, ArrowRightOutlined } from '@ant-design/icons';

export function StaffPicksSection() {
  const dict = useDictionary();

  const handleAddToCart = (title: string, price: string) => {
    message.success(`Added "${title}" (${price}) to cart!`);
  };

  return (
    <section className="w-full py-16 sm:py-20 bg-[#F3F3F5] border-y border-[#E2E2E4]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8">
        {/* Section Heading */}
        <div className="mb-8">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-[#030220] tracking-tight">
            {dict.staffPicks.title}
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Featured Hero Pick (Span 7) */}
          <div className="lg:col-span-7 bg-surface rounded-xl border border-[#C8C5CE] p-6 sm:p-8 flex flex-col sm:flex-row gap-6 sm:gap-8 justify-between shadow-xs">
            {/* Book Image */}
            <div className="relative w-full sm:w-[220px] h-[300px] sm:h-[340px] flex-shrink-0 bg-[#F3F3F5] rounded-lg overflow-hidden flex items-center justify-center p-4">
              <div className="relative w-full h-full">
                <Image
                  src="/images/overstory.png"
                  alt="The Overstory"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Book Info & Review */}
            <div className="flex flex-col justify-between flex-1">
              <div>
                <span className="font-button text-xs font-bold uppercase tracking-wider text-accent">
                  {dict.staffPicks.staffFavorite}
                </span>

                <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[#030220] mt-2">
                  The Overstory
                </h3>

                <p className="font-body text-base text-[#585F6C] italic mt-1">
                  Richard Powers
                </p>

                <blockquote className="font-body text-sm text-[#47464D] leading-relaxed mt-4 italic bg-[#F9F9FB] p-3.5 rounded border-l-2 border-accent">
                  {dict.staffPicks.overstoryQuote}
                </blockquote>
              </div>

              {/* Actions */}
              <div className="pt-6 mt-4 border-t border-[#E2E2E4] flex flex-wrap items-center gap-4">
                <Button
                  type="primary"
                  size="large"
                  onClick={() => handleAddToCart('The Overstory', '$18.99')}
                  className="!h-11 !px-6 !bg-[#1B1B3A] hover:!bg-primary !text-white font-button text-xs font-bold uppercase tracking-wider !rounded flex items-center gap-2"
                  style={{ backgroundColor: '#1B1B3A', borderColor: '#1B1B3A' }}
                >
                  <ShoppingCartOutlined />
                  <span>Add to Cart - $18.99</span>
                </Button>

                <Link
                  href="/books/the-overstory"
                  className="font-button text-xs font-bold uppercase tracking-wider text-accent hover:text-accent/80 transition-colors inline-flex items-center gap-1"
                >
                  <span>{dict.staffPicks.readReview}</span>
                  <ArrowRightOutlined className="text-xs" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right: Stacked Secondary Picks (Span 5) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            {/* Secondary Pick 1: Normal People */}
            <div className="bg-surface rounded-xl border border-[#C8C5CE] p-6 flex items-center gap-5 shadow-xs hover:border-accent/40 transition-colors">
              <div className="relative w-[90px] h-[120px] flex-shrink-0 bg-[#F3F3F5] rounded overflow-hidden p-2">
                <Image
                  src="/images/normal_people.png"
                  alt="Normal People"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col justify-between flex-1">
                <div>
                  <span className="font-button text-[10px] font-bold uppercase tracking-widest text-[#585F6C]">
                    STAFF RECOMMENDATION
                  </span>
                  <Link href="/books/normal-people">
                    <h4 className="font-heading font-bold text-lg text-[#030220] hover:text-accent transition-colors">
                      Normal People
                    </h4>
                  </Link>
                  <p className="font-body text-xs text-[#585F6C]">Sally Rooney</p>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <span className="font-heading font-bold text-base text-[#030220]">
                    $16.00
                  </span>
                  <button
                    onClick={() => handleAddToCart('Normal People', '$16.00')}
                    className="font-button text-xs font-semibold uppercase tracking-wider text-accent hover:underline"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            {/* Secondary Pick 2: Educated */}
            <div className="bg-surface rounded-xl border border-[#C8C5CE] p-6 flex items-center gap-5 shadow-xs hover:border-accent/40 transition-colors">
              <div className="relative w-[90px] h-[120px] flex-shrink-0 bg-[#F3F3F5] rounded overflow-hidden p-2">
                <Image
                  src="/images/educated.png"
                  alt="Educated"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col justify-between flex-1">
                <div>
                  <span className="font-button text-[10px] font-bold uppercase tracking-widest text-[#585F6C]">
                    MEMOIR OF THE YEAR
                  </span>
                  <Link href="/books/educated">
                    <h4 className="font-heading font-bold text-lg text-[#030220] hover:text-accent transition-colors">
                      Educated
                    </h4>
                  </Link>
                  <p className="font-body text-xs text-[#585F6C]">Tara Westover</p>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <span className="font-heading font-bold text-base text-[#030220]">
                    $17.99
                  </span>
                  <button
                    onClick={() => handleAddToCart('Educated', '$17.99')}
                    className="font-button text-xs font-semibold uppercase tracking-wider text-accent hover:underline"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
