'use client';

import React from 'react';
import { useDictionary } from '@/dictionary/LanguageContext';
import { Button } from 'antd';
import { MessageOutlined } from '@ant-design/icons';

export function FacebookCommunitySection() {
  const dict = useDictionary();

  return (
    <section className="w-full py-16 sm:py-20 bg-[rgba(220,226,243,0.5)] border-t border-[#C8C5CE]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-[#030220] tracking-tight">
            {dict.community.title}
          </h2>
          <p className="font-body text-sm text-[#585F6C] mt-2">
            {dict.community.subtitle}
          </p>
        </div>

        {/* Content: Mock Post + Action CTA */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16">
          {/* Mock Facebook Post Card */}
          <div className="w-full max-w-[420px] bg-surface rounded-xl border border-[#C8C5CE] p-5 shadow-md">
            {/* Post Header */}
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-[#1B1B3A] text-white flex items-center justify-center font-heading font-bold text-base shadow-xs">
                B
              </div>
              <div>
                <h4 className="font-heading font-bold text-sm text-[#030220]">
                  {dict.community.officialName}
                </h4>
                <span className="font-body text-xs text-[#585F6C]">
                  {dict.community.postTime}
                </span>
              </div>
            </div>

            {/* Post Body */}
            <p className="font-body text-sm text-[#47464D] leading-relaxed mb-3">
              {dict.community.postText}
            </p>

            {/* Post Media Placeholder Graphic */}
            <div className="w-full h-40 bg-[#F3F3F5] rounded flex items-center justify-center mb-3 border border-[#E2E2E4]">
              <span className="font-button text-xs font-semibold text-[#585F6C] uppercase tracking-wider flex items-center gap-2">
                <span>📚 Book of the Month Live Stream</span>
              </span>
            </div>

            {/* Post Stats */}
            <div className="pt-2 border-t border-[#E2E2E4] flex items-center justify-between text-xs text-[#585F6C] font-body">
              <span>{dict.community.likes}</span>
              <span>{dict.community.comments}</span>
            </div>
          </div>

          {/* Action CTA Block */}
          <div className="flex flex-col items-center lg:items-start space-y-5 text-center lg:text-left">
            <div className="space-y-2 max-w-sm">
              <h3 className="font-heading font-bold text-xl text-[#030220]">
                Be Part of 24,000+ Book Lovers
              </h3>
              <p className="font-body text-sm text-[#585F6C] leading-relaxed">
                Join our daily discussions, participate in monthly reading challenges, and connect directly with our book curators.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="inline-block"
              >
                <Button
                  type="primary"
                  size="large"
                  className="!h-12 !px-8 !bg-accent hover:!bg-accent/90 !text-white font-button text-sm font-bold uppercase tracking-wider !rounded-lg flex items-center gap-2.5 shadow-md"
                  style={{ backgroundColor: '#EE476F', borderColor: '#EE476F' }}
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  <span>{dict.community.connectBtn}</span>
                </Button>
              </a>

              <div className="flex items-center justify-center lg:justify-start gap-2 text-xs text-[#585F6C] font-body">
                <MessageOutlined />
                <a
                  href="/contact"
                  className="hover:underline hover:text-[#030220] font-medium"
                >
                  {dict.community.chatLive}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
