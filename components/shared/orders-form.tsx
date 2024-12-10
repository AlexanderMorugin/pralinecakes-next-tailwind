/* eslint-disable @typescript-eslint/no-explicit-any */
import { type FC } from 'react';

import { OrderCard } from './order-card';
import { OrderContact } from './order-contact';
import { OrderContent } from './order-content';

export interface OrderProps {
  token: string;
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  phone: string;
  items: any;
  createdAt: Date;
  totalAmount: number;
  comments: string | null;
  status: string;
  map?: any;
}

export const OrdersForm: FC<OrderProps> = ({
  token,
  firstName,
  lastName,
  email,
  address,
  phone,
  items,
  createdAt,
  totalAmount,
  comments,
  status,
}) => {
  const d = new Date(createdAt);
  const date = d.toLocaleString().slice(0, 17);

  return (
    token && (
      <OrderCard title={firstName + ' ' + lastName} date={date}>
        <OrderContact phone={phone} email={email} address={address} />
        <OrderContent items={items} comments={comments} />

        <span>Сумма: {totalAmount} руб</span>

        <div>Статус заказа: {status}</div>
      </OrderCard>
    )
  );
};
