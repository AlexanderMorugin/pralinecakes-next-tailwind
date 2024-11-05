import { Suspense, type FC } from 'react';
import { AlignJustify, Search } from 'lucide-react';

import { cn } from '@/lib/utils';
import { CartButton, Container, Logo, ProfileButton, SearchBar } from '.';

interface Props {
  className?: string;
}

export const Header: FC<Props> = ({ className }) => {
  return (
    <header className={cn('bg-[#c1876b]', className)}>
      <Container className='flex items-center justify-between py-1 md:py-3'>
        {/** Левая часть */}
        <AlignJustify
          size={30}
          className='flex md:hidden text-white cursor-pointer'
        />

        <Logo />

        {/** Средняя часть */}
        <Suspense>
          <SearchBar className='hidden md:flex' />
        </Suspense>

        {/** Правая часть */}
        <div className='flex gap-3'>
          <Search
            size={26}
            className='flex md:hidden text-white cursor-pointer'
          />

          <ProfileButton />
          <Suspense>
            <CartButton />
          </Suspense>
        </div>
      </Container>
    </header>
  );
};
