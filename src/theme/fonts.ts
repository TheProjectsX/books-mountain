import { Public_Sans, Space_Grotesk } from 'next/font/google';

/**
 * Editorial primary typeface for headings and body content
 */
export const publicSans = Public_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-public-sans',
  weight: ['400', '500', '600', '700'],
});

/**
 * Technical secondary typeface for labels, buttons, and meta indicators
 */
export const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
  weight: ['500', '600', '700'],
});
