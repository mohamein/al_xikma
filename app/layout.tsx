import type { Metadata } from 'next';
import { Roboto_Mono } from 'next/font/google';

import './globals.css';
import { cn } from '@/lib/utils';

const roboto = Roboto_Mono({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
  variable: '--ff-roboto-mono',
});

export const metadata: Metadata = {
  title: 'Al-Xikma Finance App',
  description: 'finance app for Alxikma',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen bg-[#fafafa] overflow-x-hidden',
          roboto.variable
        )}
      >
        <main>{children}</main>
      </body>
    </html>
  );
}
