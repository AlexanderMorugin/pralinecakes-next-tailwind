import { type FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { formLoginShema, TFormLoginValues } from './schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { Title } from '@/components/shared/title';
import { FormInput } from '@/components/shared/form';
import { Button } from '@/components/ui';
import toast from 'react-hot-toast';
import { signIn } from 'next-auth/react';

interface Props {
  onClose?: VoidFunction;
}

export const LoginForm: FC<Props> = ({ onClose }) => {
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

      toast.success('Вы вошли в аккаунт', { icon: '✅' });
      onClose?.();
    } catch (error) {
      console.log('Error [LOGIN] ', error);
      toast.error('Не удалось войти в аккаунт', { icon: '❌' });
    }
  };

  return (
    <FormProvider {...form}>
      <form
        className='flex flex-col gap-2'
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className='flex flex-col'>
          <Title text='Вход в аккаунт' size='md' className='font-bold' />
          <p className='text-gray-400 text-[14px]'>
            Введите свою почту и пароль, чтобы войти в аккаунт.
          </p>
        </div>

        <FormInput type='email' name='email' label='Email' required />
        <FormInput type='password' name='password' label='Пароль' required />

        <Button
          loading={form.formState.isSubmitting}
          className='text-base'
          type='submit'
        >
          Войти
        </Button>
      </form>
    </FormProvider>
  );
};
