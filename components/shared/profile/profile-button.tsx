/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { type FC } from 'react';

import { UserRound } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { UserRole } from '@prisma/client';
import { Button } from '@/components/ui';

interface Props {
  session: any;
  user: string;
  hasCheckout?: boolean;
  handleClickSignIn?: () => void;
}

export const ProfileButton: FC<Props> = ({
  session,
  user,
  hasCheckout,
  handleClickSignIn,
}) => {
  return (
    <>
      {!session || session.user.role === UserRole.ADMIN ? (
        <>
          <UserRound
            size={26}
            className='relative flex text-white cursor-pointer md:hidden'
            onClick={handleClickSignIn}
          />

          <Button
            onClick={handleClickSignIn}
            variant='outline'
            className='hidden md:flex items-center gap-2 w-[130px] group'
          >
            <UserRound
              size={16}
              className={cn(
                'flex items-center gap-1 text-[#cd9575] transition duration-300 group-hover:opacity-0',
                { 'text-gray-800': hasCheckout }
              )}
            />
            <span
              className={cn(
                'flex items-center gap-1 text-[#cd9575] tracking-wide transition duration-300 group-hover:text-white group-hover:-translate-x-2',
                { 'text-gray-800': hasCheckout }
              )}
            >
              Войти
            </span>
          </Button>
        </>
      ) : (
        <Link href='/profile'>
          <div className='flex items-center justify-center w-[26px] h-[26px] rounded-full bg-[#ff0000] cursor-pointer md:hidden'>
            <UserRound size={20} className='text-white' />
          </div>

          <Button
            variant='profile'
            className='hidden md:flex items-center w-[130px] overflow-hidden'
          >
            <span className='font-bold'>{user}</span>
          </Button>
        </Link>
      )}
    </>
  );
};
