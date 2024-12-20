/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn } from '@/lib/utils';
import { type FC } from 'react';
import { Title } from '../title';

interface Props {
  item: any;
  className?: string;
}

export const CurrentOrderContentModal: FC<Props> = ({ item, className }) => {
  return (
    <div className={cn('flex flex-col gap-4 bg-white rounded-xl', className)}>
      <Title size='sm' text='Детали заказа' className='p-3' />
      <ul className='flex flex-col gap-4 pb-4'>
        {item.items.map((el: any) => (
          <li
            key={el.id}
            className='flex items-center justify-between gap-1 text-[14px] odd:bg-white even:bg-slate-50  md:text-[16px]'
          >
            <div className='flex items-center gap-1 overflow-hidden py-1 pl-2 sm:gap-2 md:gap-3 md:pl-3'>
              <img
                src={el.product.imageUrl}
                className='w-[32px] h-[32px] rounded-full object-cover md:w-[52px] md:h-[52px]'
                alt={el.product.name}
              />

              <span className='line-clamp-1'>{el.product.name}</span>
            </div>

            <div className='pr-2 md:pr-3'>
              <b>{el.quantity}</b>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
