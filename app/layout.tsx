import type { Metadata } from 'next';
import { Jost, Playfair_Display } from 'next/font/google';
import '../styles/globals.css';
import Cursor from '@/components/Cursor';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const jost = Jost({
  subsets: ['latin'],
  variable: '--font-sans',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: 'Carolina Celedón | Photography',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jost.variable} ${playfair.variable}`}>
      <body suppressHydrationWarning>
        <Cursor />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
