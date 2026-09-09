'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Rate, Button, message } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';

export interface BookCardProps {
  id?: string;
  slug: string;
  title: string;
  author: string;
  authorSlug?: string;
  price: string;
  coverImage: string;
  rating?: number;
  reviewCount?: number;
  badge?: string;
  badgeVariant?: 'accent' | 'dark' | 'amber';
  onAddToCart?: () => void;
}

export function BookCard({
  slug,
  title,
  author,
  authorSlug,
  price,
  coverImage,
  rating = 5,
  badge,
  badgeVariant = 'accent',
  onAddToCart,
}: BookCardProps) {
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onAddToCart) {
      onAddToCart();
    } else {
      message.success(`Added "${title}" to cart!`);
    }
  };

  const badgeBg =
    badgeVariant === 'dark'
      ? 'bg-[#140003] text-white'
      : badgeVariant === 'amber'
      ? 'bg-[#D97706] text-white'
      : 'bg-accent text-white';

  return (
    <div className="group bg-surface rounded-lg border border-border p-4 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-md h-full relative">
      {/* Cover Image Wrapper */}
      <div className="relative w-full h-[260px] bg-[#F3F3F5] rounded flex items-center justify-center p-3 mb-4 overflow-hidden">
        {badge && (
          <span
            className={`absolute top-2 right-2 text-[10px] font-button font-bold px-2 py-0.5 rounded-[2px] uppercase tracking-wider z-10 shadow-xs ${badgeBg}`}
          >
            {badge}
          </span>
        )}
        <Link href={`/books/${slug}`} className="w-full h-full flex items-center justify-center">
          <div className="relative w-full h-full max-w-[190px] max-h-[220px] transition-transform duration-300 group-hover:scale-105 drop-shadow-sm">
            <Image
              src={coverImage}
              alt={title}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 25vw"
            />
          </div>
        </Link>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 justify-between">
        <div>
          <Link href={`/books/${slug}`}>
            <h3 className="font-heading font-bold text-base sm:text-[17px] text-[#030220] line-clamp-2 leading-snug group-hover:text-accent transition-colors">
              {title}
            </h3>
          </Link>
          <p className="font-body text-sm text-[#585F6C] mt-1">
            {authorSlug ? (
              <Link href={`/authors/${authorSlug}`} className="hover:underline">
                {author}
              </Link>
            ) : (
              author
            )}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-1.5 mt-2">
            <Rate
              disabled
              defaultValue={rating}
              allowHalf
              className="text-xs text-accent"
              style={{ fontSize: 13, color: '#EE476F' }}
            />
          </div>
        </div>

        {/* Price & Add to Cart */}
        <div className="pt-4 mt-3 border-t border-[#E2E2E4] flex items-center justify-between">
          <span className="font-heading font-bold text-base text-[#030220]">
            {price}
          </span>
          <Button
            type="primary"
            onClick={handleAddToCart}
            className="!bg-accent hover:!bg-accent/90 !text-white font-button text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 !rounded"
            style={{ backgroundColor: '#EE476F', borderColor: '#EE476F' }}
          >
            <ShoppingCartOutlined className="text-sm" />
            <span>Add</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
