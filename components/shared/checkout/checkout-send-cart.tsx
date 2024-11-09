'use client';

import { type FC } from 'react';

import { CheckoutCartItem } from '..';
import { useCart } from '@/hooks/use-cart';

export const CheckoutSendCart: FC = () => {
  const { totalAmount, cartItems } = useCart();
  return (
    <>
      <span>Заказ</span>
      <ul className='flex flex-col gap-3'>
        {cartItems.map((item) => (
          <CheckoutCartItem
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            isCheckoutSendCart={true}
          />
        ))}
      </ul>
      <div className='flex justify-between py-4'>
        <span>Сумма заказа:</span>
        <span>
          <b>{totalAmount}</b> р
        </span>
      </div>
    </>
  );
};
