import { type FC } from 'react';
import { AlignJustify, Search, ShoppingCart, UserRound } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

import LogoImage from '@/assets/images/logo-120.png';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import { Container, Logo } from '.';

interface Props {
  className?: string;
}

export const Header: FC<Props> = ({ className }) => {
  return (
    <header className={cn('bg-[#c1876b]', className)}>
      <Container className='flex items-center justify-between py-3'>
        {/** Левая часть */}
        <AlignJustify size={30} className='flex md:hidden text-white cursor-pointer' />
        <Logo className='hidden md:flex' />

        {/** Средняя часть */}
        <span className='hidden md:flex'>Поиск</span>
        <Link href='/' className='flex md:hidden'>
          <Image
            src={LogoImage}
            alt='Logo'
            width={44}
            height={44}
            placeholder='blur'
          />
        </Link>

        {/** Правая часть */}
        <div className='flex gap-3'>
          <Search size={26} className='flex md:hidden text-white cursor-pointer' />
          <UserRound size={26} className='flex md:hidden text-white cursor-pointer' />
          <ShoppingCart size={26} className='flex md:hidden text-white cursor-pointer' />

          <Button variant='outline' className='hidden md:flex'>
            Войти
          </Button>
          <Button variant='outline' className='hidden md:flex'>
            Корзина
          </Button>
        </div>
      </Container>
    </header>
  );
};
