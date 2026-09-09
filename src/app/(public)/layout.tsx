import React from 'react';
import { AnnouncementBar } from '@/components/public/AnnouncementBar';
import { PublicHeader } from '@/components/public/PublicHeader';
import { PublicFooter } from '@/components/public/PublicFooter';

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-background text-text-primary selection:bg-accent selection:text-white">
      <AnnouncementBar />
      <PublicHeader />
      <main className="flex-1 w-full">
        {children}
      </main>
      <PublicFooter />
    </div>
  );
}
