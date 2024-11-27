'use client';

import { useSession } from 'next-auth/react';
import { type FC } from 'react';
import { Button } from '../ui';
import { CircleUser, User } from 'lucide-react';
import Link from 'next/link';

interface Props {
  handleClickSignIn?: () => void;
}

export const ProfileButton: FC<Props> = ({ handleClickSignIn }) => {
  const { data: session } = useSession();

  return (
    <>
      {!session ? (
        <Button
          onClick={handleClickSignIn}
          variant='outline'
          className='flex items-center gap-1'
        >
          <User size={16} />
          Войти
        </Button>
      ) : (
        <Link href='/profile'>
          <Button variant='secondary' className='flex items-center gap-2'>
            <CircleUser size={16} />
            Профиль
          </Button>
        </Link>
      )}
    </>
  );
};

