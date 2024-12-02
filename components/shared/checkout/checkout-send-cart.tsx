'use client';

import { type FC } from 'react';

import { CheckoutCartItem } from '..';
import { useTotalPrice } from '@/hooks/use-total-price';
import { useCartStore } from '@/store';

export const CheckoutSendCart: FC = () => {
  const { totalAmount, cartItems } = useCartStore((state) => state);
  const { totalPrice } = useTotalPrice(totalAmount);
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
        <span>Сумма к оплате:</span>
        <span className='font-bold'>{totalPrice} р</span>
      </div>
    </>
  );
};
