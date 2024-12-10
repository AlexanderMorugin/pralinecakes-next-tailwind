/* eslint-disable @typescript-eslint/no-explicit-any */
import { type FC } from 'react';
import { OrderAccordeon } from './order-accordeon';

interface Props {
  items: any;
  comments: string | null;
}

export const OrderContent: FC<Props> = ({ items, comments }) => {
  return (
    <>
      <OrderAccordeon title='Детали заказа' className='py-2 px-2 md:px-3'>
        <ul className='flex flex-col gap-4'>
          {items?.map((item: any) => (
            <li
              key={item.id}
              className='grid grid-cols-[60px_1fr_100px_100px] gap-2'
            >
              <img
                src={item.product.imageUrl}
                className='w-[52px] h-[52px] rounded-full object-cover'
                alt={item.product.name}
              />

              <span className='flex items-center'>{item.product.name}</span>
              <span className='flex items-center'>{item.quantity}шт</span>
              <span className='flex items-center'>{item.product.price} руб</span>
            </li>
          ))}
        </ul>
      </OrderAccordeon>
      {comments && <div>Комментарии: {comments}</div>}
    </>
  );
};
