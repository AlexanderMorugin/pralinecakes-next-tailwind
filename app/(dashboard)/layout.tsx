import React, { Suspense } from 'react';

import { Footer, Header } from '@/components/shared';

export const metadata = {
  title: 'Dashboard Pralinecakes Next Tailwind',
  description: 'Dashboard Pralinecakes Next Tailwind',
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Suspense>
        <Header hasSearch={false} hasCart={false} hasDashboard={true} />
      </Suspense>
      <main className='flex-grow bg-[#F4F1EE]'>{children}</main>
      <Footer />
    </>
  );
}
