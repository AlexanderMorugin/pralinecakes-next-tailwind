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
      <OrderAccordeon title='Детали заказа' className='py-2'>
        <ul className='flex flex-col gap-4'>
          {items?.map((item: any) => (
            <li
              key={item.id}
              className='flex items-center justify-between gap-1 text-[14px] odd:bg-white even:bg-slate-50  md:text-[16px]'
            >
              <div className='flex items-center gap-1 overflow-hidden py-1 pl-2 sm:gap-2 md:gap-3 md:pl-3'>
                <img
                  src={item.product.imageUrl}
                  className='w-[32px] h-[32px] rounded-full object-cover md:w-[52px] md:h-[52px]'
                  alt={item.product.name}
                />

                <span className='line-clamp-1'>
                  {item.product.name}
                </span>
              </div>

              <div className='pr-2 md:pr-3'>
                <b>{item.quantity}</b>
              </div>
            </li>
          ))}
        </ul>
      </OrderAccordeon>
      {comments && <div>Комментарии: {comments}</div>}
    </>
  );
};
