'use client';

import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  CheckoutAddressForm,
  CheckoutCart,
  CheckoutModal,
  CheckoutPersonalForm,
  CheckoutSidebar,
  Container,
  Title,
} from '@/components/shared';
import { useCart } from '@/hooks/use-cart';
import {
  checkoutFormSchema,
  CheckoutFormValues,
} from '@/components/shared/checkout/checkout-form-schema';
import { useEffect, useState } from 'react';
import { createOrder } from '@/app/api/actions';
import toast from 'react-hot-toast';
import { useSession } from 'next-auth/react';
import { Api } from '@/services/api-client';

export default function CheckoutPage() {
  const { totalAmount, cartItems, loading } = useCart();
  const [showModal, setShowModal] = useState(false);
  const { data: session } = useSession();

  const [personalInfo, setPersonalInfo] = useState<CheckoutFormValues>({
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
    comment: '',
  });
  const [submiting, setSubmiting] = useState(false);

  const form = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: {
      email: '',
      firstName: '',
      lastName: '',
      phone: '',
      address: '',
      comment: '',
    },
  });

  useEffect(() => {
    async function fetchUserInfo() {
      const data = await Api.auth.getMe();
      const [firstName, lastName] = data.fullName.split(' ');

      form.setValue('firstName', firstName);
      form.setValue('lastName', lastName);
      form.setValue('email', data.email);
    }

    if (session) {
      fetchUserInfo();
    }
  }, [session]);

  const onSubmit = async (data: CheckoutFormValues) => {
    try {
      setSubmiting(true);
      setShowModal(true);
      setPersonalInfo(data);

      const url = await createOrder(data);

      toast.success('Заказ успешно оформлен', {
        icon: '✅',
      });

      if (url) {
        location.href = url;
      }
    } catch (error) {
      console.log(error);
      toast.error('Не удалось создать заказ', { icon: '❌' });
      setSubmiting(false);
    }
  };

  return (
    <>
      <Container className='pt-5 md:pt-10'>
        <Title
          text='Оформление заказа'
          className='font-extrabold mb-4 text-[18px] text-center md:text-left md:mb-8 md:text-[26px]'
        />

        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className='flex flex-col md:flex-row gap-5'>
              {/** Левая сторона */}
              <div className='flex flex-col gap-5 w-full md:w-3/5 mb-5'>
                <CheckoutCart
                  cartItems={cartItems}
                  loading={loading}
                  totalAmount={totalAmount}
                />

                <CheckoutPersonalForm
                  className={
                    loading || !totalAmount
                      ? 'opacity-40 pointer-events-none'
                      : ''
                  }
                />

                <CheckoutAddressForm
                  className={
                    loading || !totalAmount
                      ? 'opacity-40 pointer-events-none'
                      : ''
                  }
                />
              </div>

              {/** Правая сторона */}
              <CheckoutSidebar
                totalAmount={totalAmount}
                loading={loading || submiting}
              />
            </div>
          </form>
        </FormProvider>
      </Container>

      <CheckoutModal showModal={showModal} data={personalInfo} />
    </>
  );
}
