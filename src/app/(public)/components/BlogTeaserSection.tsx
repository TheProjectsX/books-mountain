'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useDictionary } from '@/dictionary/LanguageContext';
import { ArrowRightOutlined } from '@ant-design/icons';

export function BlogTeaserSection() {
  const dict = useDictionary();

  const blogPosts = [
    {
      slug: '10-must-read-fantasy-novels-this-fall',
      title: dict.blog.post1Title,
      excerpt: dict.blog.post1Excerpt,
      coverImage: '/images/blog_1.png',
      tag: 'READING LISTS',
      readTime: '6 MIN READ',
      date: 'MAY 15, 2026',
    },
    {
      slug: 'author-interview-magic-of-storytelling',
      title: dict.blog.post2Title,
      excerpt: dict.blog.post2Excerpt,
      coverImage: '/images/blog_2.png',
      tag: 'AUTHOR INTERVIEWS',
      readTime: '8 MIN READ',
      date: 'APR 28, 2026',
    },
    {
      slug: 'how-to-build-a-reading-habit',
      title: dict.blog.post3Title,
      excerpt: dict.blog.post3Excerpt,
      coverImage: '/images/blog_3.png',
      tag: 'COMMUNITY TIPS',
      readTime: '5 MIN READ',
      date: 'APR 12, 2026',
    },
  ];

  return (
    <section className="w-full py-16 sm:py-20 bg-background">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-[#030220] tracking-tight">
              {dict.blog.title}
            </h2>
          </div>
          <Link
            href="/blog"
            className="group inline-flex items-center gap-1.5 font-button text-xs font-bold uppercase tracking-wider text-accent hover:text-accent/80 transition-colors"
          >
            <span>VIEW ALL</span>
            <ArrowRightOutlined className="text-xs transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* 3-card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-surface rounded-lg border border-[#C8C5CE] overflow-hidden flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow group"
            >
              <div>
                {/* Blog Image */}
                <div className="relative w-full h-[210px] overflow-hidden bg-[#F3F3F5]">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-surface/90 backdrop-blur-xs font-button text-[10px] font-bold text-accent px-2.5 py-1 rounded tracking-wider uppercase">
                    {post.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs font-button text-[#585F6C] uppercase tracking-wider mb-2">
                    <span>{post.readTime}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>

                  <Link href={`/blog/${post.slug}`}>
                    <h3 className="font-heading font-bold text-lg text-[#030220] group-hover:text-accent transition-colors leading-snug line-clamp-2">
                      {post.title}
                    </h3>
                  </Link>

                  <p className="font-body text-sm text-[#585F6C] mt-2.5 line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2">
                <Link
                  href={`/blog/${post.slug}`}
                  className="font-button text-xs font-bold uppercase tracking-wider text-accent hover:underline inline-flex items-center gap-1"
                >
                  <span>Read Article</span>
                  <ArrowRightOutlined className="text-xs" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
