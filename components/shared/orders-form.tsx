/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  // useEffect,
  // useEffect,
  // useEffect,
  type FC,
} from 'react';

import { OrderCard } from './order-card';
// import { OrderContact } from './order-contact';
// import { OrderContent } from './order-content';
import { Button } from '../ui';
import { OrderStatus } from '@prisma/client';
import { useOrderStore } from '@/store/order';
// import { useOrderStore } from '@/store/order';
// import { useOrderStore } from '@/store/order';

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
  // handleChangeStatus: (id: number, status: OrderStatus) => void
  // handleChangeStatus: any
  map?: any;
}

export const OrdersForm: FC<OrderProps> = ({
  id,
  token,
  firstName,
  // lastName,
  // email,
  // address,
  // phone,
  // items,
  createdAt,
  totalAmount,
  // comments,
  status,
  // handleChangeStatus
}) => {
  const { getOrders, updateOrderStatus } = useOrderStore((state) => state);

  const d = new Date(createdAt);
  const date = d.toLocaleString().slice(0, 17);

  const handleChangeStatus = async (id: number, status: OrderStatus) => {
    await updateOrderStatus(id, status);
    getOrders()
  };

  // useEffect(() => {
  //   getOrders();
  // }, [updateOrderStatus, getOrders]);

  return (
    token && (
      <OrderCard
        id={id}
        title={firstName}
        date={date}
        status={status}
        totalAmount={totalAmount}
      >
        {/* <OrderContact
          name={firstName + ' ' + lastName}
          phone={phone}
          email={email}
          address={address}
        /> */}
        {/* <OrderContent items={items} comments={comments} /> */}

        <Button
          variant='status'
          size='status'
          // onClick={() => handleChangeStatus(id, status)}
          onClick={() => handleChangeStatus(id, status)}
        >
          Выполнить
        </Button>
      </OrderCard>
    )
  );
};
