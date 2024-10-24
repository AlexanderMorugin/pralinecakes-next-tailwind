import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import './globals.css';
import { Footer, Header } from '@/components/shared';
import { cn } from '@/lib/utils';

const nunito = Nunito({
  subsets: ['cyrillic'],
  variable: '--font-nunito',
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Pralinecakes Next Tailwind',
  description: 'Pralinecakes Next Tailwind',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={cn('flex flex-col min-h-screen', nunito.className)}>
        <Header />
        <main className='flex-grow'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
