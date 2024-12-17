'use client';

import { useEffect, type FC } from 'react';
import { useOrderStore } from '@/store/order';
import { Container, Title } from '..';
import { OrdersForm } from '../order/orders-form';

export const DashboardContent: FC = () => {
  const { order, getOrders, updateOrderStatus } = useOrderStore(
    (state) => state
  );

  useEffect(() => {
    // загружает данные с сервера сразу при входе на страницу или обновлении статуса
    getOrders();

    // проверяет сервер через каждую 1 мин
    const timer = setInterval(() => {
      getOrders();
    }, 10000);

    // очистка интервала
    return () => clearInterval(timer);
  }, [updateOrderStatus, getOrders]);

  // проверяет сервер через каждые 2 мин
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     getOrders();
  //   }, 200000);

  //   // очистка интервала
  //   return () => clearInterval(timer);
  // }, [getOrders]);

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
            />
          ))}
      </ul>
    </Container>
  );
};
