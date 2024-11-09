'use client';

import { type FC } from 'react';
import { CheckoutFormValues } from './checkout-form-schema';
import { useCart } from '@/hooks/use-cart';
import { CheckoutSendCart, CheckoutSendPersonalForm } from '.';

interface Props {
  data: CheckoutFormValues;
}

export const СheckoutSendForm: FC<Props> = ({ data }) => {
  const { totalAmount, cartItems } = useCart();
  return (
    <>
      <span>Заказ</span>
      <CheckoutSendCart cartItems={cartItems} />
      <div className='flex justify-between py-4'>
        <span>Сумма заказа:</span>
        <span>
          <b>{totalAmount}</b> р
        </span>
      </div>

      <CheckoutSendPersonalForm data={data} />
    </>
  );
};
