import { type FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { formLoginShema, TFormLoginValues } from './schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { Title } from '@/components/shared/title';
import { FormInput } from '@/components/shared/form';
import { Button } from '@/components/ui';
import toast from 'react-hot-toast';
import { Fish, FishOff } from 'lucide-react';
import { signIn } from 'next-auth/react';
import image from '@/public/logo-120.png'
import Image from 'next/image';

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
        toast.error('Не удалось войти в аккаунт', { icon: <FishOff /> });
      }

      toast.success('Вы успешно вошли в аккаунт', { icon: <Fish /> });
      onClose?.();
    } catch (error) {
      console.log('Error [LOGIN] ', error);
      toast.error('Не удалось войти в аккаунт', { icon: <FishOff /> });
    }
  };

  return (
    <FormProvider {...form}>
      <form
        className='flex flex-col gap-5'
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className='flex justify-between items-center'>
          <div className='mr-2'>
            <Title text='Вход в аккаунт' size='md' className='font-bold' />
            <p className='text-gray-400'>
              Введите свою почту, чтобы войти в аккаунт
            </p>
          </div>
          <Image
            src={image}
            alt='image'
            width={60}
            height={60}
          />
        </div>

        <FormInput name='email' label='Email' required />
        <FormInput name='password' label='Пароль' type='password' required />

        <Button
          loading={form.formState.isSubmitting}
          className='h-12 text-base'
          type='submit'
        >
          Войти
        </Button>
      </form>
    </FormProvider>
  );
};
