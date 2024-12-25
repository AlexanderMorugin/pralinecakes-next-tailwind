'use client';

import { Suspense, useEffect, useState, type FC } from 'react';
import { AlignJustify, ChevronLeft, House, Search } from 'lucide-react';

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
import {
  useRouter,
  // useSearchParams
} from 'next/navigation';
// import toast from 'react-hot-toast';
import { signOut, useSession } from 'next-auth/react';
import { useUserStore } from '@/store/user';
import Link from 'next/link';
import { DashboardButton } from './dashboard/dashboard-button';
import { AdminModal } from './modals/admin-modal/admin-modal';
import { Button } from '../ui';
// import { UserRole } from '@prisma/client';

interface Props {
  hasSearch?: boolean;
  hasCart?: boolean;
  hasCheckout?: boolean;
  hasDashboard?: boolean;
  className?: string;
}

export const Header: FC<Props> = ({
  hasSearch = true,
  hasCart = true,
  hasCheckout = false,
  hasDashboard = false,
  className,
}) => {
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [openAdminModal, setOpenAdminModal] = useState(false);

  const router = useRouter();
  // const searchParams = useSearchParams();
  const { data: session } = useSession();

  const { user, getUser } = useUserStore((state) => state);

  useEffect(() => {
    if (session) {
      getUser();
    }
  }, [session, getUser]);

  // useEffect(() => {
  //   if (session?.user.role === UserRole.ADMIN) {
  //     location.href = '/dashboard';
  //   }
  // }, []);

  // useEffect(() => {
  //   let toastMessage = '';

  //   if (searchParams.has('verified')) {
  //     toastMessage = 'Почта успешно подтверждена';
  //   }

  //   if (toastMessage) {
  //     setTimeout(() => {
  //       router.replace('/');
  //       toast.success(toastMessage, { duration: 3000 });
  //     }, 1000);
  //   }
  // }, [router, searchParams]);

  const onClickSignOut = () => {
    signOut({
      callbackUrl: '/',
    });
  };

  return (
    <header
      className={cn(
        'sticky top-0 z-20 bg-[#4e1609] pb-1 md:pb-2',
        { 'bg-[#c1876b]': hasCheckout },

        { 'bg-[#8486ec]': hasDashboard },
        className
      )}
    >
      <Container
        className={cn(
          'flex items-center justify-between border-b border-[#cd9575] px-4 pt-4 pb-2 md:pb-4 md:border-0',
          {
            'border-0': hasCheckout || hasDashboard,
          }
        )}
      >
        {/** Левая часть */}
        {hasCheckout || hasDashboard ? (
          <div className='flex items-center gap-5'>
            {hasCheckout && (
              <ChevronLeft
                size={20}
                className='text-white cursor-pointer'
                onClick={() => router.back()}
              />
            )}

            {session && (
              <p className='font-bold text-white'>{`${user.firstName} ${user.lastName}`}</p>
            )}

            {hasDashboard && (
              <p className='font-bold text-white'>Панель управления</p>
            )}
          </div>
        ) : (
          <>
            <AlignJustify
              size={30}
              className='flex md:hidden text-white cursor-pointer'
            />
            <Logo />
          </>
        )}

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

          {/** Кнопка сотрудника */}
          <Suspense>
            <AdminModal
              open={openAdminModal}
              onClose={() => setOpenAdminModal(false)}
              session={session}
            />

            {!hasCheckout && !hasDashboard ? (
              <DashboardButton
                handleClickSignIn={() => setOpenAdminModal(true)}
              />
            ) : hasDashboard ? (
              <Button onClick={onClickSignOut}>Выйти</Button>
            ) : (
              <Link href='/'>
                <House
                  size={26}
                  className='text-white'
                  // onClick={onClickSignOut}
                />
              </Link>
            )}
          </Suspense>

          {/** Кнопка профиля */}
          <Suspense>
            <AuthModal
              open={openAuthModal}
              onClose={() => setOpenAuthModal(false)}
              session={session}
            />
            {!hasCheckout && !hasDashboard && (
              <ProfileButton
                session={session}
                user={user.firstName}
                hasCheckout={hasCheckout}
                handleClickSignIn={() => setOpenAuthModal(true)}
              />
            )}
          </Suspense>

          {/** Кнопка корзины */}
          {hasCart && (
            <Suspense>
              <CartButton />
            </Suspense>
          )}
        </div>
      </Container>

      {!hasCheckout && !hasDashboard && <TopBar />}
    </header>
  );
};
