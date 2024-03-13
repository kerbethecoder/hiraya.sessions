import type { Metadata } from 'next';
import Image from 'next/image';
import { inter_tight } from '@/app/ui/fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'Hiraya Sessions',
  description: 'Session timer for Hiraya: Study Hub & Coworking Space.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="px-96">
        <div className="flex justify-center items-center">
          <Image
            src="./logo-white.png"
            alt="Hiraya Logo"
            width={200}
            height={24}
            priority
          />
        </div>
        {children}
        <div className="flex justify-center items-center text-xs">
          © {new Date().getFullYear()} &middot; All Rights Reserved
          &mdash;&nbsp;
          <a
            href="https://kerbethecoder.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={`${inter_tight.className} font-bold hover:underline`}>
            Kerby Cantos.
          </a>
        </div>
      </body>
    </html>
  );
}
