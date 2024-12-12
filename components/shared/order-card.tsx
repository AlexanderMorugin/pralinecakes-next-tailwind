import { PropsWithChildren, type FC } from 'react';
import { Title } from './title';
import { cn } from '@/lib/utils';

interface Props {
  id: number;
  title: string;
  date: string;
  statusTitle?: string;
  totalAmount: number;
  className?: string;
}

export const OrderCard: FC<PropsWithChildren<Props>> = ({
  id,
  title,
  date,
  statusTitle,
  totalAmount,
  className,
  children,
}) => {
  return (
    <div
      className={cn(
        'bg-white rounded-3xl overflow-hidden border border-[#8486ec]',
        className
      )}
    >
      {/** Верхняя часть карточки */}
      <div className='flex items-center justify-between p-2 px-3 bg-[#cecef3] sm:px-5'>
        <div className='flex items-center gap-2'>
          <span className='text-[12px]'>#{id}</span>
          <Title text={title} size='sm' className='font-bold' />
        </div>

        <span className='text-[12px]'>{date}</span>
      </div>

      {/** Контент карточки */}
      <div className='flex flex-col gap-2 py-2 px-2 md:py-4 md:px-5'>
        {children}
      </div>

      {/** Нижняя часть карточки */}
      <div className='flex items-center justify-between bg-[#fae1c0]'>
        <div className='flex items-center gap-2'>
          <div
            className={cn('text-white p-2 px-3 sm:px-5 rounded-r-[8px]',
              {'bg-[#ff0000]': statusTitle === 'Новый'},
              {'bg-green-600': statusTitle === 'Выполнен'},
            )}
          >
            <span className='font-bold'>{statusTitle}</span>
          </div>
        </div>

        <span className='text-[14px] p-2 px-3 sm:px-5'>
          <b>{totalAmount}</b>&nbsp;руб
        </span>
      </div>
    </div>
  );
};
