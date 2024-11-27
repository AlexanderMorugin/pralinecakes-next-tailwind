'use client';

import { Suspense, useState, type FC } from 'react';
import { AlignJustify, Search } from 'lucide-react';

import { cn } from '@/lib/utils';
import { CartButton, Container, Logo, ProfileButton, SearchBar } from '.';
import { AuthModal } from './modals/auth-modal';

interface Props {
  hasSearch?: boolean;
  hasCart?: boolean;
  hasCheckout?: boolean;
  className?: string;
}

export const Header: FC<Props> = ({
  hasSearch = true,
  hasCart = true,
  hasCheckout = false,
  className,
}) => {
  const [openAuthModal, setOpenAuthModal] = useState(false);

  return (
    <header
      className={cn('bg-[#c1876b]', { 'bg-[#F4F1EE]': hasCheckout }, className)}
    >
      <Container
        className={cn('flex items-center justify-between py-1 md:py-3', {
          'border-b border-gray-300': hasCheckout,
        })}
      >
        {/** Левая часть */}
        <AlignJustify
          size={30}
          className={cn('flex md:hidden text-white cursor-pointer', {
            'text-gray-800': hasCheckout,
          })}
        />

        <Logo hasCheckout={hasCheckout} />

        {/** Средняя часть */}
        {hasSearch && (
          <Suspense>
            <SearchBar className='hidden md:flex' />
          </Suspense>
        )}

        {/** Правая часть */}
        <div className='flex gap-3'>
          {hasSearch && (
            <Search
              size={26}
              className='flex md:hidden text-white cursor-pointer'
            />
          )}

          <Suspense>
            <AuthModal
              open={openAuthModal}
              onClose={() => setOpenAuthModal(false)}
            />
            <ProfileButton handleClickSignIn={() => setOpenAuthModal(true)} />
          </Suspense>

          {hasCart && (
            <Suspense>
              <CartButton />
            </Suspense>
          )}
        </div>
      </Container>
    </header>
  );
};
