'use client';

import { Order } from '@prisma/client';
import { type FC } from 'react';
import { Container, Title } from '.';
import { OrdersForm } from './orders-form';

interface Props {
  orders: Order[];
}

export const DashboardContent: FC<Props> = ({ orders }) => {
  return (
    <Container className='py-5 md:py-10'>
      <Title
        text='Панель кондитерской'
        className='font-extrabold mb-4 text-[18px] text-center md:text-left md:mb-8 md:text-[26px]'
      />
      <ul className='flex flex-col gap-4 px-2'>
        {orders &&
          orders.map((item) => (
            <OrdersForm
              key={item.id}
              id={item.id}
              token={item.token}
              firstName={item.firstName}
              lastName={item.lastName}
              email={item.email}
              address={item.address}
              phone={item.phone}
              items={item.items}
              createdAt={item.createdAt}
              totalAmount={item.totalAmount}
              comments={item.comments}
              status={item.status}
              // handleChangeStatus={handleChangeStatus}
            />
          ))}
      </ul>
    </Container>
  );
};
