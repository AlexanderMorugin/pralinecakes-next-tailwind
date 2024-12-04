'use client';

import { Suspense, useEffect, useState, type FC } from 'react';
import { AlignJustify, Search } from 'lucide-react';

import { cn } from '@/lib/utils';
import {
  CartButton,
  Container,
  Logo,
  ProfileButton,
  SearchBar,
  TopBar,
} from '.';
import { AuthModal } from './modals/auth-modal';
import { useRouter, useSearchParams } from 'next/navigation';
import toast from 'react-hot-toast';

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
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    let toastMessage = '';

    if (searchParams.has('verified')) {
      toastMessage = 'Почта успешно подтверждена';
    }

    if (toastMessage) {
      setTimeout(() => {
        router.replace('/');
        toast.success(toastMessage, { duration: 3000 });
      }, 1000);
    }
  }, [router, searchParams]);

  return (
    <header
      className={cn(
        'sticky top-0 z-20 bg-[#4e1609] pb-1 md:pb-2',
        { 'bg-[#F4F1EE]': hasCheckout },
        className
      )}
    >
      <Container
        className={cn('flex items-center justify-between border-b border-[#cd9575] pt-4 pb-2 md:pb-4', {
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
        <div className='flex items-center gap-3'>
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

      <TopBar />
    </header>
  );
};
