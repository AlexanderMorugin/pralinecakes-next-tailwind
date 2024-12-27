import { type FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { formLoginShema, TFormLoginValues } from './schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { Title } from '@/components/shared/title';
import { FormInput } from '@/components/shared/form';
import { Button } from '@/components/ui';
import toast from 'react-hot-toast';
import { signIn, signOut } from 'next-auth/react';
// import { ToastSuccess } from '@/components/shared/toast-success';

interface Props {
  userSession?: boolean;
  adminSession?: boolean;
  // onClose?: VoidFunction;
}

export const LoginForm: FC<Props> = ({
  userSession,
  adminSession,
  // onClose,
}) => {
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


      // ToastSuccess({ title: 'Вы вошли в аккаунт' });
      // onClose?.();
    } catch (error) {
      console.log('Error [LOGIN] ', error);
      toast.error('Не удалось войти в аккаунт', { icon: '❌' });
    }
  };

  if (userSession) {
    location.href = '/profile';
  }

  if (adminSession) {
    signOut({
      callbackUrl: '/',
    });
  }

  return (
    <FormProvider {...form}>
      <form
        className='flex flex-col gap-2'
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className='flex flex-col'>
          <Title text='Вход в аккаунт' size='md' className='font-bold' />
          <div className='flex flex-col text-[14px]'>
            <span className='pb-2'>
              Укажите данные тестового пользователя или зарегистрируйте нового
            </span>
            <span>
              Почта: <b>user@mail.ru</b>
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
  );
};
