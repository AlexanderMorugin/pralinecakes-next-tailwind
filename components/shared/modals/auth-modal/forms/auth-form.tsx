'use client';

import { useState, type FC } from 'react';

import { Button } from '@/components/ui';
import { cn } from '@/lib/utils';

import { LoginForm, RegisterForm } from '.';

interface Props {
  handleClose: () => void;
  className?: string;
  userSession?: boolean;
  adminSession?: boolean;
}

export const AuthForm: FC<Props> = ({
  handleClose,
  userSession,
  adminSession,
  className,
}) => {
  const [type, setType] = useState<'login' | 'register'>('login');

  const onSwitchType = () => {
    setType(type === 'login' ? 'register' : 'login');
  };

  return (
    <div
      className={cn(
        'flex flex-col gap-2 bg-white rounded-xl overflow-hidden pt-6 pb-4 px-4',
        className
      )}
    >
      {type === 'login' ? (
        <LoginForm userSession={userSession} adminSession={adminSession} />
      ) : (
        <RegisterForm onClose={handleClose} />
      )}
      {type === 'login' && (
        <Button
          variant='outline'
          onClick={onSwitchType}
          type='button'
          className='text-[14px]'
        >
          Регистрация
        </Button>
      )}
    </div>
  );
};
