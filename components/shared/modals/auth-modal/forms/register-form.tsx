'use client';

import { type FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import toast from 'react-hot-toast';
import { TFormRegisterValues, formRegisterSchema } from './schemas';
import { FormInput } from '../../../form';
import { Button } from '@/components/ui';
import { registerUser } from '@/app/api/actions';
import { Title } from '@/components/shared';

interface Props {
  onClose?: VoidFunction;
}

export const RegisterForm: FC<Props> = ({ onClose }) => {
  const form = useForm<TFormRegisterValues>({
    resolver: zodResolver(formRegisterSchema),
    defaultValues: {
      email: '',
      firstName: '',
      lastName: '',
      phone: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = async (data: TFormRegisterValues) => {
    try {
      await registerUser({
        firstName: data.firstName,
        lastName: data.lastName,
        phone: data.phone,
        email: data.email,        
        password: data.password,
      });

      toast.error('Регистрация успешна 📝. Подтвердите свою почту', {
        icon: '✅',
      });

      onClose?.();
    } catch (error) {
      console.log(error);
      return toast.error('Неверный E-Mail или пароль', {
        icon: '❌',
      });
    }
  };

  return (
    <FormProvider {...form}>
      <form
        className='flex flex-col gap-2'
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className='flex flex-col'>
          <Title text='Регистрация' size='md' className='font-bold' />
          <p className='text-gray-400 text-[14px]'>
            Заполните поля, чтобы зарегистрировать аккаунт.
          </p>
        </div>
        <FormInput type='text' name='firstName' label='Имя' required />
        <FormInput type='text' name='lastName' label='Фамилия' required />
        <FormInput type='text' name='phone' label='Телефон' required />
        <FormInput type='email' name='email' label='E-Mail' required />
        <FormInput type='password' name='password' label='Пароль' required />
        <FormInput
          type='password'
          name='confirmPassword'
          label='Подтвердите пароль'
          required
        />

        <Button
          loading={form.formState.isSubmitting}
          className='h-12 text-base'
          type='submit'
        >
          Зарегистрироваться
        </Button>
      </form>
    </FormProvider>
  );
};
