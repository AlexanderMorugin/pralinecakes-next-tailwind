'use client';

// import { useForm, FormProvider } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
import {
  CheckoutCart,
  CheckoutSidebar,
  // CheckoutAddressForm,
  // CheckoutCart,
  // CheckoutPersonalForm,
  // CheckoutSidebar,
  Container,
  Title,
  WhiteBlock,
} from '@/components/shared';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useCartStore } from '@/store';
// import { useCart } from '@/hooks';
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
  const {
    // getCartItems,
    // totalAmount,
    cartItems,
    // updateCartItemQuantity,
    // removeCartItem,
  } = useCartStore((state) => state);
  // const [submiting, setSubmiting] = useState(false);
  // const { data: session } = useSession();

  // const { totalAmount, items, updateItemQuantity, removeCartItem, loading } =
  //   useCart();

  // const form = useForm<CheckoutFormValues>({
  //   resolver: zodResolver(checkoutFormSchema),
  //   defaultValues: {
  //     email: '',
  //     firstName: '',
  //     lastName: '',
  //     phone: '',
  //     address: '',
  //     comment: '',
  //   },
  // });

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
      {/* <FormProvider 
      {...form}
      > */}
      {/* <form 
        // onSubmit={form.handleSubmit(onSubmit)}
        > */}
      <div className='flex flex-col md:flex-row gap-5'>
        {/** Левая сторона */}
        <div className='flex flex-col gap-5 w-full md:w-3/5 mb-5'>
          <CheckoutCart
            cartItems={cartItems}
            // loading={loading}
            // handleClickCountButton={handleClickCountButton}
            // removeCartItem={removeCartItem}
          />
          {/* <WhiteBlock title='1. Корзина' contentClassName='flex flex-col gap-5'>
            sdfsdf
          </WhiteBlock> */}

          <WhiteBlock title='2. Персональные данные'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
              <Input name='firstName' className='text-base' placeholder='Имя' />
              <Input
                name='lastName'
                className='text-base'
                placeholder='Фамилия'
              />
              <Input name='email' className='text-base' placeholder='E-Mail' />
              <Input name='phone' className='text-base' placeholder='Телефон' />
            </div>
          </WhiteBlock>

          <WhiteBlock title='3. Адрес доставки'>
            <div className='flex flex-col gap-5'>
              <Input
                name='address'
                className='text-base'
                placeholder='Адрес доставки...'
              />
              <Textarea
                name='comment'
                className='text-base'
                rows={5}
                placeholder='Комментарии к заказу'
              />
            </div>
          </WhiteBlock>

          {/* <CheckoutCart
                items={items}
                loading={loading}
                handleClickCountButton={handleClickCountButton}
                removeCartItem={removeCartItem}
              /> */}
          {/* <CheckoutPersonalForm
                className={loading ? 'opacity-40 pointer-events-none' : ''}
              /> */}

          {/** TODO: Исправить ошибку в консоли */}
          {/* <CheckoutAddressForm
                className={loading ? 'opacity-40 pointer-events-none' : ''}
              /> */}
        </div>

        {/** Правая сторона */}
        <CheckoutSidebar
          totalAmount={1540}
          // totalAmount={totalAmount}
          // loading={loading || submiting}
        />
      </div>
      {/* </form> */}
      {/* </FormProvider> */}
    </Container>
  );
}
