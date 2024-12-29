'use client';

import { Button } from '@/components/ui';
import { signOut } from 'next-auth/react';
import React from 'react';

export const ProfileSignoutButton = () => {
  const onClickSignOut = () => {
    signOut({
      callbackUrl: '/',
    });
  };

  return (
    <Button
      type='button'
      variant='secondary'
      onClick={onClickSignOut}
      className='w-full max-w-[400px] h-14 text-[16px]'
    >
      Выйти из аккаунта
    </Button>
  );
};
