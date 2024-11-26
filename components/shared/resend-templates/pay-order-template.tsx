import { type FC } from 'react';

import { useTotalPrice } from '@/hooks/use-total-price';

interface Props {
  orderId: number;
  totalAmount: number;
  paymentUrl: string;
}

export const PayOrderTemplate: FC<Props> = ({
  orderId,
  totalAmount,
  paymentUrl,
}) => {
  const { totalPrice } = useTotalPrice(totalAmount);

  return (
    <div>
      <h1>Заказ #{orderId}</h1>
      <p>
        Оплатите заказ на сумму <b>{totalPrice} р</b>. Перейдите по{' '}
        <a href={paymentUrl}>этой ссылке</a> для оплаты.
      </p>
    </div>
  );
};
