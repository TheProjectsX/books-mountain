import type { Metadata } from 'next';
import { publicSans, spaceGrotesk } from '@/theme/fonts';
import { ThemeProvider } from '@/theme/ThemeProvider';
import './globals.css';

export const metadata: Metadata = {
  title: 'Books Mountain | Production-Ready Next.js Client Starter',
  description:
    'A minimal, themeable Next.js App Router boilerplate with Ant Design, Tailwind CSS, Prisma ORM, and JWT authentication.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${publicSans.variable} ${spaceGrotesk.variable}`}
    >
      <body className="bg-background text-text-primary min-h-screen antialiased flex flex-col">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
