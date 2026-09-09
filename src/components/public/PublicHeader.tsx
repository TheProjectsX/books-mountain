'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useDictionary } from '@/dictionary/LanguageContext';
import { LanguageToggle } from '@/components/common/LanguageToggle';
import { SearchOutlined, ShoppingOutlined, MenuOutlined, CloseOutlined } from '@ant-design/icons';
import { Input, Modal, Drawer, Empty, Button } from 'antd';

export function PublicHeader() {
  const dict = useDictionary();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const navLinks = [
    { href: '/books', label: dict.header.books },
    { href: '/authors', label: dict.header.authors },
    { href: '/about', label: dict.header.about },
    { href: '/blog', label: dict.header.blog },
    { href: '/contact', label: dict.header.contact },
  ];

  return (
    <>
      <header className="w-full bg-[#F9F9FB] border-b border-[#C8C5CE] sticky top-0 z-40">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-8 h-16 flex items-center justify-between">
          {/* Left: Brand Logo */}
          <Link href="/" className="flex items-center group">
            <span className="font-heading font-bold text-2xl sm:text-[32px] tracking-tight text-[#030220] group-hover:text-primary-container transition-colors">
              {dict.header.brand}
            </span>
          </Link>

          {/* Center: Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-button text-[12px] tracking-[0.05em] uppercase transition-colors ${
                    isActive
                      ? 'text-accent font-semibold'
                      : 'text-[#1B1B3A] hover:text-accent'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right: Actions */}
          <div className="flex items-center space-x-3 sm:space-x-5">
            {/* Search Trigger */}
            <button
              onClick={() => setSearchModalOpen(true)}
              aria-label="Search"
              className="p-2 text-[#030220] hover:text-accent transition-colors rounded-full hover:bg-surface-container"
            >
              <SearchOutlined className="text-lg" />
            </button>

            {/* Cart Trigger */}
            <button
              onClick={() => setCartDrawerOpen(true)}
              aria-label="Shopping Cart"
              className="flex items-center gap-1.5 p-1.5 text-[#030220] hover:text-accent transition-colors relative"
            >
              <ShoppingOutlined className="text-xl" />
              <span className="bg-accent text-white font-button text-[11px] font-bold px-1.5 py-0.5 rounded-full min-w-[18px] text-center leading-none">
                {cartCount}
              </span>
            </button>

            {/* Follow Us link on desktop */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-block font-body text-sm text-[#585F6C] hover:text-[#030220] transition-colors"
            >
              {dict.header.followUs}
            </a>

            {/* Language Toggle */}
            <div className="hidden sm:block">
              <LanguageToggle compact showIcon={false} />
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#030220] hover:text-accent transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <CloseOutlined className="text-xl" /> : <MenuOutlined className="text-xl" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer / Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#F9F9FB] border-b border-[#C8C5CE] px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block font-button text-sm tracking-wider uppercase text-[#1B1B3A] hover:text-accent py-2"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 border-t border-[#E2E2E4] flex items-center justify-between">
              <span className="text-xs text-text-secondary">Language:</span>
              <LanguageToggle compact showIcon={false} />
            </div>
          </div>
        )}
      </header>

      {/* Search Modal */}
      <Modal
        open={searchModalOpen}
        onCancel={() => setSearchModalOpen(false)}
        footer={null}
        title="Search Books, Authors & Topics"
        centered
      >
        <div className="py-4 space-y-4">
          <Input.Search
            placeholder="Type book title, author, or genre..."
            enterButton="Search"
            size="large"
            onSearch={(value) => {
              if (value.trim()) {
                window.location.href = `/search?q=${encodeURIComponent(value.trim())}`;
              }
            }}
          />
          <div className="text-xs text-text-secondary flex gap-2 flex-wrap items-center">
            <span>Popular searches:</span>
            <Link href="/search?q=Fiction" onClick={() => setSearchModalOpen(false)} className="text-accent hover:underline">Fiction</Link>
            <span>•</span>
            <Link href="/search?q=Andy Weir" onClick={() => setSearchModalOpen(false)} className="text-accent hover:underline">Andy Weir</Link>
            <span>•</span>
            <Link href="/search?q=Fantasy" onClick={() => setSearchModalOpen(false)} className="text-accent hover:underline">Fantasy</Link>
          </div>
        </div>
      </Modal>

      {/* Cart Drawer */}
      <Drawer
        open={cartDrawerOpen}
        onClose={() => setCartDrawerOpen(false)}
        title="Your Shopping Cart"
        placement="right"
      >
        <div className="flex flex-col h-full justify-between">
          <div className="py-8">
            <Empty description="Your cart is currently empty" />
          </div>
          <div className="border-t border-border pt-4">
            <Button
              type="primary"
              block
              size="large"
              onClick={() => {
                setCartDrawerOpen(false);
                window.location.href = '/books';
              }}
              style={{ backgroundColor: '#EE476F', borderColor: '#EE476F' }}
            >
              Continue Browsing
            </Button>
          </div>
        </div>
      </Drawer>
    </>
  );
}
