'use client';

import { Container, Title } from '@/components/shared';
import { OrdersForm } from '@/components/shared/orders-form';
import { useOrderStore } from '@/store/order';

import { useEffect } from 'react';

export default function DashboardPage() {
  const getOrders = useOrderStore((state) => state.getOrders);

  useEffect(() => {
    getOrders();
  }, [getOrders]);

  const order = useOrderStore((state) => state.order);

  // console.log('DashboardPage: ', order);

  console.log(order);
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
            />
          ))}
      </ul>
    </Container>
  );
}
