/* eslint-disable @typescript-eslint/no-explicit-any */

import { type FC } from 'react';

import { OrderStatus } from '@prisma/client';

import { OrderCard } from './order-card';
import { OrderContact } from './order-contact';
import { OrderContent } from './order-content';

export interface OrderProps {
  id: number;
  userId: number;
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  phone: string;
  items: any;
  createdAt: Date;
  totalAmount: number;
  comments: string | null;
  status: OrderStatus;
  map?: any;
}

export const OrdersForm: FC<OrderProps> = ({
  id,
  userId,
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
    <OrderCard
      id={id}
      userId={userId}
      firstName={firstName}
      lastName={lastName}
      date={date}
      status={status}
      email={email}
      phone={phone}
      totalAmount={totalAmount}
    >
      <OrderContact
        name={firstName + ' ' + lastName}
        phone={phone}
        email={email}
        address={address}
      />
      <OrderContent items={items} comments={comments} />
    </OrderCard>
  );
};
