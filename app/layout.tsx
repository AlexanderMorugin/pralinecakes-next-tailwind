import { Nunito } from 'next/font/google';

import './globals.css';
import { cn } from '@/lib/utils';
import { Providers } from '@/components/shared/providers';

const nunito = Nunito({
  subsets: ['cyrillic'],
  variable: '--font-nunito',
  weight: ['400', '500', '600', '700', '800', '900'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      {/* <head>
        <link data-rh='true' rel='icon' href='/logo-120.png' />
      </head> */}
      <body className={cn('flex flex-col min-h-screen', nunito.className)}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
