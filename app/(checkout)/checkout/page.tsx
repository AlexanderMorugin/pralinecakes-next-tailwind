'use client';

import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  CheckoutAddressForm,
  CheckoutCart,
  CheckoutPersonalForm,
  CheckoutSidebar,
  Container,
  Title,
  WhiteBlock,
} from '@/components/shared';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useCart } from '@/hooks/use-cart';
import {
  checkoutFormSchema,
  CheckoutFormValues,
} from '@/components/shared/checkout/checkout-form-schema';

// import {
//   checkoutFormSchema,
//   CheckoutFormValues,
// } from '@/components/shared/checkout/checkout-form-schema';
// import { createOrder } from '@/app/actions';
// import toast from 'react-hot-toast';
// import { Fish, FishOff } from 'lucide-react';
// import { useEffect, useState } from 'react';
// import { useSession } from 'next-auth/react';
// import { Api } from '@/services/api-client';

export default function CheckoutPage() {
  const { totalAmount, cartItems } = useCart();
  // const [submiting, setSubmiting] = useState(false);
  // const { data: session } = useSession();

  // const { totalAmount, items, updateItemQuantity, removeCartItem, loading } =
  //   useCart();

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

  // useEffect(() => {
  //   async function fetchUserInfo() {
  //     const data = await Api.auth.getMe();
  //     const [firstName, lastName] = data.fullName.split(' ');

  //     form.setValue('firstName', firstName);
  //     form.setValue('lastName', lastName);
  //     form.setValue('email', data.email);
  //   }

  //   if (session) {
  //     fetchUserInfo();
  //   }
  // }, [session]);

  const onSubmit = (data: CheckoutFormValues) => {
    console.log('ON SUBMIT');
  };

  // const onSubmit = async (data: CheckoutFormValues) => {
  //   try {
  //     setSubmiting(true);
  //     const url = await createOrder(data);

  //     toast.success('Заказ успешно оформлен', { icon: <Fish /> });

  //     if (url) {
  //       location.href = url;
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     setSubmiting(false);
  //     toast.error('Не удалось отправить заказ', { icon: <FishOff /> });
  //   }
  // };

  // const handleClickCountButton = (
  //   id: number,
  //   quantity: number,
  //   type: 'plus' | 'minus'
  // ) => {
  //   const newQuantity = type === 'plus' ? quantity + 1 : quantity - 1;
  //   // updateItemQuantity(id, newQuantity);
  // };

  return (
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
              <CheckoutCart cartItems={cartItems} />

              <CheckoutPersonalForm
              // className={loading ? 'opacity-40 pointer-events-none' : ''}
              />

              <CheckoutAddressForm
              // className={loading ? 'opacity-40 pointer-events-none' : ''}
              />
            </div>

            {/** Правая сторона */}
            <CheckoutSidebar
              totalAmount={totalAmount}

              // loading={loading || submiting}
            />
          </div>
        </form>
      </FormProvider>
    </Container>
  );
}
