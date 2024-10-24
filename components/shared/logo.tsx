import { type FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import LogoImage from '@/assets/images/logo-120.png';

interface Props {
  className?: string;
}

export const Logo: FC<Props> = ({ className }) => {
  return (
    <Link href='/' className={cn('gap-3 items-center', className)}>
      <Image
        src={LogoImage}
        alt='Logo'
        width={52}
        height={52}
        placeholder='blur'
        className='object-cover'
      />
      <div className='flex flex-col text-white'>
        <span className='text-2xl font-bold'>Пралине</span>
        <span>кондитерская</span>
      </div>
    </Link>
  );
};
