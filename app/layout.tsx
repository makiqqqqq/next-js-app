import 'app/globals.css';
import { Inter } from 'next/font/google';
import React, { ReactNode } from 'react';
import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Providers } from '@/app/providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'next-app',
  description: 'Next-js blog'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          <main className="main-wrapper">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
