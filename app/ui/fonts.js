import { Inter, Inter_Tight } from 'next/font/google';

export const inter = Inter({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const inter_tight = Inter_Tight({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  style: ['normal', 'italic'],
});
