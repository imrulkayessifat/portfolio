"use client";

import '../globals.css'
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Header from '@/components/Header';
import Lines from '@/components/Lines';
import ScrollToTop from '@/components/ScrollToTop';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="eng">
      <body className={`dark:bg-black`}>
        <ThemeProvider
          enableSystem={false}
          attribute="class"
          defaultTheme="light"
        >
          <Lines />
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}
