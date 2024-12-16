'use client';

import { useEffect, type FC } from 'react';
import { Container, Title } from '.';
import { OrdersForm } from './orders-form';
import { useOrderStore } from '@/store/order';
// import { OrderStatus } from '@prisma/client';

export const DashboardContent: FC = () => {
  const { order, getOrders, updateOrderStatus } = useOrderStore(
    (state) => state
  );

  // const handleChangeStatus = (id: number, status: OrderStatus) => {
  //   updateOrderStatus(id, status);
  // };

  useEffect(() => {
    getOrders();
  }, [updateOrderStatus, getOrders]);

  return (
    <Container className='py-5 md:py-10'>
      <Title
        text='Панель кондитерской'
        className='font-extrabold mb-4 text-[18px] text-center md:text-left md:mb-8 md:text-[26px]'
      />
      <ul className='flex flex-col gap-4 px-2'>
        {order &&
          order.map((item) => (
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
              // handleChangeStatus={() => handleChangeStatus(item.id, item.status)}
            />
          ))}
      </ul>
    </Container>
  );
};
