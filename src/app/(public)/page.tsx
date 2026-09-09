'use client';

import React from 'react';
import {
  HeroSection,
  CategoryPills,
  NewArrivalsSection,
  StaffPicksSection,
  BestsellersSection,
  ReaderReviewsSection,
  BlogTeaserSection,
  FacebookCommunitySection,
} from './components';

export default function PublicHomePage() {
  return (
    <div className="w-full">
      {/* 1. Hero Section (#1:184) */}
      <HeroSection />

      {/* 2. Category Pills Bar (#1:13) */}
      <CategoryPills />

      {/* 3. New Arrivals (#1:29) */}
      <NewArrivalsSection />

      {/* 4. Staff Picks Bento Grid (#1:102) */}
      <StaffPicksSection />

      {/* 5. Bestsellers Section (#1:197) */}
      <BestsellersSection />

      {/* 6. Reader Reviews (#1:285) */}
      <ReaderReviewsSection />

      {/* 7. From Our Blog Teaser (#1:150) */}
      <BlogTeaserSection />

      {/* 8. Facebook Community Integration (#1:320) */}
      <FacebookCommunitySection />
    </div>
  );
}
