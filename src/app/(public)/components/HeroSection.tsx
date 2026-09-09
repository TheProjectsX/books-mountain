'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useDictionary } from '@/dictionary/LanguageContext';
import { Button } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';

export function HeroSection() {
  const dict = useDictionary();

  return (
    <section className="relative w-full bg-[#1B1B3A] text-white overflow-hidden py-16 sm:py-24">
      {/* Background Ambience Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero_reading_corner.png"
          alt="Cozy bookstore library"
          fill
          priority
          className="object-cover object-center opacity-30 mix-blend-luminosity scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#030220] via-[#1B1B3A]/90 to-[#1B1B3A]/70" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headline, Subtitle, CTA */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/15">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="font-button text-xs tracking-wider uppercase text-white/90">
                Curated Literary Collection
              </span>
            </div>

            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-[52px] leading-[1.15] tracking-tight text-white whitespace-pre-line">
              {dict.hero.title}
            </h1>

            <p className="font-body text-base sm:text-lg text-[#C8C5CE] max-w-xl leading-relaxed">
              {dict.hero.subtitle}
            </p>

            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <Link href="/books">
                <Button
                  type="primary"
                  size="large"
                  className="!h-12 !px-8 !bg-accent hover:!bg-accent/90 !text-white font-button text-sm font-bold uppercase tracking-wider !rounded flex items-center gap-2 shadow-lg hover:shadow-accent/25"
                  style={{ backgroundColor: '#EE476F', borderColor: '#EE476F' }}
                >
                  <span>{dict.hero.cta}</span>
                  <ArrowRightOutlined />
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  ghost
                  size="large"
                  className="!h-12 !px-6 !text-white !border-white/30 hover:!border-white hover:!text-white font-button text-sm font-semibold uppercase tracking-wider !rounded"
                >
                  Our Story
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column: Visual Book Showcase Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[420px] aspect-[4/3] rounded-xl overflow-hidden border border-white/20 shadow-2xl bg-surface/5 backdrop-blur-sm p-3 group">
              <div className="relative w-full h-full rounded-lg overflow-hidden">
                <Image
                  src="/images/hero_reading_corner.png"
                  alt="Curated Book Selection"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                  <span className="font-button text-[11px] font-bold tracking-widest text-accent uppercase">
                    Featured Edition
                  </span>
                  <h2 className="font-heading font-bold text-xl text-white mt-1">
                    The Modern Literary Review
                  </h2>
                  <p className="font-body text-xs text-white/80 mt-1">
                    Explore our staff handpicked seasonal masterworks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
