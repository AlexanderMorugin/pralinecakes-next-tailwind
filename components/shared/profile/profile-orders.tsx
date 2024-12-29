'use client';

import { useOrderStore } from '@/store/order';
import { User } from '@prisma/client';
import { useEffect, type FC } from 'react';
import { ProfileCurrentOrder } from '.';
import { Title } from '../title';
import { Container } from '..';
import { DashboardLoading } from '../dashboard/dashboard-loading';

interface Props {
  data: User;
}

export const ProfileOrders: FC<Props> = ({ data }) => {
  const { getOrders, order, loading } = useOrderStore((state) => state);

  useEffect(() => {
    getOrders();
  }, [getOrders]);

  const filterOrder = order
    .filter((item) => item.userId === data.id)
    .map((item) => item);

  // console.log(filterOrder);

  const initialValue = 0;

  const totalAmountCurrentUserOrders = filterOrder.reduce(
    (acc, currentItem) => acc + currentItem.totalAmount,
    initialValue
  );

  return (
    <Container className='flex flex-col items-center gap-5 w-full py-5 px-2'>
      <Title text='Мои заказы' size='md' className='font-bold' />
      {loading ? (
        <DashboardLoading />
      ) : (
        <ul
          className='flex flex-col gap-3 w-full max-w-[400px]'
          // className='flex flex-col gap-4 items-center'
        >
          {filterOrder.map((item) => (
            <ProfileCurrentOrder key={item.id} item={item} />
          ))}
        </ul>
      )}

      <div className='flex justify-between w-full max-w-[400px] mt-5'>
        <span>Общая сумма: </span>
        <span>{totalAmountCurrentUserOrders} руб</span>
      </div>
    </Container>
  );
};
