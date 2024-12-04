'use client';

import { cn } from '@/lib/utils';
import { useState, type FC } from 'react';
// import { signIn } from 'next-auth/react';

import { LoginForm, RegisterForm } from '.';
import { Button } from '@/components/ui';

interface Props {
  handleClose: () => void;
  className?: string;
}

export const AuthForm: FC<Props> = ({ handleClose, className }) => {
  const [type, setType] = useState<'login' | 'register'>('login');

  const onSwitchType = () => {
    setType(type === 'login' ? 'register' : 'login');
  };

  
  return (
    <div
      className={cn(
        'flex flex-col gap-2 bg-white rounded-xl overflow-hidden pt-10 pb-4 px-4',
        className
      )}
    >
      {type === 'login' ? (
          <LoginForm onClose={handleClose} />
        ) : (
          <RegisterForm onClose={handleClose} />
        )}
        {/* <hr /> */}
        {/* <div className='flex gap-2'>
          <Button
            variant='secondary'
            onClick={() =>
              signIn('github', { callbackUrl: '/', redirect: true })
            }
            type='button'
            className='gap-2 h-12 p-2 flex-1'
          >
            <img
              className='w-6 h-6'
              src='https://github.githubassets.com/favicons/favicon.svg'
            />
            GitHub
          </Button>

          <Button
            variant='secondary'
            onClick={() =>
              signIn('google', { callbackUrl: '/', redirect: true })
            }
            type='button'
            className='gap-2 h-12 p-2 flex-1'
          >
            <img
              className='w-6 h-6'
              src='https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg'
            />
            Google
          </Button>
        </div> */}
        <Button
          variant='outline'
          onClick={onSwitchType}
          type='button'
          className='h-12'
        >
          {type !== 'login' ? 'Войти' : 'Регистрация'}
        </Button>
    </div>
  );
};
