/* eslint-disable @typescript-eslint/no-explicit-any */
import { type FC } from 'react';

import { OrderCard } from './order-card';
import { OrderStatus } from '@prisma/client';
import { useOrderStore } from '@/store/order';
import { OrderContact } from './order-contact';
import { OrderContent } from './order-content';

export interface OrderProps {
  id: number;
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
  status: OrderStatus;
  map?: any;
}

export const OrdersForm: FC<OrderProps> = ({
  id,
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
  const { getOrders, updateOrderStatus } = useOrderStore((state) => state);

  const d = new Date(createdAt);
  const date = d.toLocaleString().slice(0, 17);

  const handleChangeStatus = async (id: number, status: OrderStatus) => {
    await updateOrderStatus(id, status);
    getOrders();
  };

  return (
    token && (
      <OrderCard
        id={id}
        title={firstName}
        date={date}
        status={status}
        totalAmount={totalAmount}
        handleChangeStatus={handleChangeStatus}
      >
        <OrderContact
          name={firstName + ' ' + lastName}
          phone={phone}
          email={email}
          address={address}
        />
        <OrderContent items={items} comments={comments} />
      </OrderCard>
    )
  );
};
