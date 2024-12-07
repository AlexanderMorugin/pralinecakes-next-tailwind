'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { User } from '@prisma/client';
import { type FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import {
  formRegisterSchema,
  TFormRegisterValues,
} from './modals/auth-modal/forms/schemas';
import toast from 'react-hot-toast';
import { signOut } from 'next-auth/react';
import { Container } from './container';
import { Title } from './title';
import { FormInput } from './form';
import { Button } from '../ui';
import { updateUserInfo } from '@/app/api/actions';
import { useUserStore } from '@/store/user';
import { ToastSuccess } from './toast-success';

interface Props {
  data: User;
}

export const ProfileForm: FC<Props> = ({ data }) => {
  const getUser = useUserStore((state) => state.getUser);

  const form = useForm({
    resolver: zodResolver(formRegisterSchema),
    defaultValues: {
      firstName: data.firstName,
      lastName: data.lastName,
      phone: data.phone,
      email: data.email,
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = async (data: TFormRegisterValues) => {
    try {
      await updateUserInfo({
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        phone: data.phone,
        password: data.password,
      });

      await getUser();

      ToastSuccess({ title: 'Данные обновлены' });
    } catch (error) {
      console.log('Error [PROFILE_FORM] ', error);
      return toast.error('Ошибка при обновлении данных', { icon: '❌' });
    }
  };

  const onClickSignOut = () => {
    signOut({
      callbackUrl: '/',
    });
  };

  return (
    <Container className='flex flex-col items-center w-full my-2 px-4'>
      <FormProvider {...form}>
        <form
          className='flex flex-col gap-2 w-full md:mt-10 sm:w-96'
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div className='flex flex-col'>
            <Title
              text='Редактировать профиль'
              size='md'
              className='font-bold'
            />
            <p className='text-gray-400 text-[14px]'>
              Вы можете изменить некоторые или все поля.
            </p>
          </div>

          <FormInput type='text' name='firstName' label='Имя' required />
          <FormInput type='text' name='lastName' label='Фамилия' required />
          <FormInput type='text' name='phone' label='Телефон' required />
          <FormInput type='email' name='email' label='Email' required />
          <FormInput
            type='password'
            name='password'
            label='Новый пароль'
            required
          />
          <FormInput
            type='password'
            name='confirmPassword'
            label='Подтвердите пароль'
            required
          />

          <Button
            type='submit'
            disabled={form.formState.isSubmitting}
            className='text-[16px] mt-5'
          >
            Сохранить изменения
          </Button>

          <Button
            type='button'
            disabled={form.formState.isSubmitting}
            variant='secondary'
            className='text-[14px]'
            onClick={onClickSignOut}
          >
            Выйти из аккаунта
          </Button>
        </form>
      </FormProvider>
    </Container>
  );
};
