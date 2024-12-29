import React, { Suspense } from 'react';

import { Footer, Header } from '@/components/shared';

export const metadata = {
  title: 'Checkout Pralinecakes Next Tailwind',
  description: 'Checkout Pralinecakes Next Tailwind',
};

export default async function CheckoutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Suspense>
        <Header hasSearch={false} hasCart={false} hasCheckout={true} />
      </Suspense>
      <main className='flex-grow bg-[#F4F1EE]'>{children}</main>
      <Footer />
    </>
  );
}
