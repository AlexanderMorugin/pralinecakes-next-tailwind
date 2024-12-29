import { FormProvider, useForm } from 'react-hook-form';
import { signIn, signOut } from 'next-auth/react';
import toast from 'react-hot-toast';

import { zodResolver } from '@hookform/resolvers/zod';
import { FormInput, Title } from '@/components/shared';
import { Button } from '@/components/ui';
import { cn } from '@/lib/utils';

import { formLoginShema, TFormLoginValues } from '../auth-modal/forms/schemas';

interface Props {
  className?: string;
  adminSession?: boolean;
  userSession?: boolean;
}

export const AdminForm = ({ adminSession, userSession, className }: Props) => {
  const form = useForm<TFormLoginValues>({
    resolver: zodResolver(formLoginShema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: TFormLoginValues) => {
    try {
      const response = await signIn('credentials', {
        ...data,
        redirect: false,
      });

      if (!response?.ok) {
        throw Error();
      }
    } catch (error) {
      console.log('Error [LOGIN] ', error);
      toast.error('Вход не выполнен', { icon: '❌' });
    }
  };

  if (userSession) {
    signOut({
      callbackUrl: '/',
    });
  }

  if (adminSession) {
    location.href = '/dashboard';
  }

  return (
    <div
      className={cn(
        'flex flex-col gap-2 bg-white rounded-xl overflow-hidden pt-6 pb-4 px-4',
        className
      )}
    >
      <FormProvider {...form}>
        <form
          className='flex flex-col gap-2'
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div className='flex flex-col'>
            <Title
              text='Вход для сотрудников'
              size='md'
              className='font-bold '
            />
            <div className='flex flex-col text-[14px]'>
              <span className='pb-2'>Укажите данные сотрудника</span>
              <span>
                Почта: <b>admin@mail.ru</b>
              </span>
              <span>
                Пароль: <b>123</b>
              </span>
            </div>
          </div>

          <FormInput type='email' name='email' label='Email' required />
          <FormInput type='password' name='password' label='Пароль' required />

          <Button
            loading={form.formState.isSubmitting}
            className='text-[16px]'
            type='submit'
          >
            Войти
          </Button>
        </form>
      </FormProvider>
    </div>
  );
};
