/* eslint-disable @typescript-eslint/no-explicit-any */
import { type FC } from 'react';

import { OrderCard } from './order-card';
import { OrderContact } from './order-contact';
import { OrderContent } from './order-content';
import { Button } from '../ui';
import { OrderStatus } from '@prisma/client';
import { useOrderStore } from '@/store/order';

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
  const { updateOrderStatus } = useOrderStore((state) => state);
  // const status = useOrderStore((state) => state.status);
  // console.log(status);

  const d = new Date(createdAt);
  const date = d.toLocaleString().slice(0, 17);

  const handleChangeStatus = (id: number) => {
    updateOrderStatus(id, OrderStatus.SUCCES);
    status = 'SUCCES';
  };

  const statusTitle = (status: string) => {
    if (status === 'PENDING') {
      status = 'Новый';
      return status;
    }

    if (status === 'SUCCES') {
      status = 'Выполнен';
      return status;
    }
  };

  return (
    token && (
      <OrderCard
        id={id}
        title={firstName}
        date={date}
        statusTitle={statusTitle(status)}
        totalAmount={totalAmount}
      >
        <OrderContact
          name={firstName + ' ' + lastName}
          phone={phone}
          email={email}
          address={address}
        />
        <OrderContent items={items} comments={comments} />

        <Button
          variant='status'
          size='status'
          onClick={() =>
            handleChangeStatus(
              id
              //  status
            )
          }
          // handleClickCountButton={(type) =>
          //   handleClickCountButton(item.id, item.quantity, type)
          // }
        >
          Выполнить
        </Button>
      </OrderCard>
    )
  );
};
