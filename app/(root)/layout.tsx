import { Suspense } from 'react';
import type { Metadata } from 'next';

import { Footer, Header } from '@/components/shared';

export const metadata: Metadata = {
  title: 'Pralinecakes Next Tailwind',
  description: 'Pralinecakes Next Tailwind',
};

export default function HomeLayout({
  modal,
  children,
}: Readonly<{
  modal: React.ReactNode;
  children: React.ReactNode;
}>) {
  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <main className='flex-grow'>
        {modal}
        {children}
      </main>
      <Footer />
    </>
  );
}
