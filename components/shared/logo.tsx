import { type FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import LogoImage from '@/assets/images/logo-120.png';

interface Props {
  hasCheckout?: boolean;
  className?: string;
}

export const Logo: FC<Props> = ({ hasCheckout, className }) => {
  return (
    <Link href='/' className={cn('flex gap-2 items-center', className)}>
      <Image
        src={LogoImage}
        alt='Logo'
        width={42}
        height={42}
        placeholder='blur'
        className='object-cover'
      />
      <div
        className={cn('hidden xs:flex flex-col text-white text-center', {
          'text-gray-800': hasCheckout,
        })}
      >
        <span className='text-sm md:text-xl font-bold uppercase'>Пралине</span>
        <span>кондитерская</span>
      </div>
    </Link>
  );
};
