'use client';

import { PropsWithChildren, useState, type FC } from 'react';
import { cn } from '@/lib/utils';
import { OrderStatus } from '@prisma/client';
import { Title } from '..';
import { Button } from '@/components/ui';
import { OrderChangeStatusModal } from './order-change-status-modal';
import { ArrowRight } from 'lucide-react';

interface Props {
  id: number;
  title: string;
  date: string;
  status: OrderStatus;
  // token: string;
  totalAmount: number;
  className?: string;
}

export const OrderCard: FC<PropsWithChildren<Props>> = ({
  id,
  title,
  date,
  status,
  // token,
  totalAmount,
  className,
  children,
}) => {
  const [showChangeStatus, setShowChangeStatus] = useState(false);

  const onClose = () => {
    setShowChangeStatus(false);
  };
  const handleShowChangeStatusModal = () => {
    setShowChangeStatus(true);
  };

  return (
    <>
      {/** Модальное окно с кнопками подтверждения */}
      {showChangeStatus && (
        <OrderChangeStatusModal
          showChangeStatus={showChangeStatus}
          onClose={onClose}
          id={id}
          status={status}
        />
      )}

      {/** Карточка заказа */}
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

          {/** Кнопка всех заказов пользователя */}
          <div className='flex items-center gap-2 border border-white rounded-full py-2 px-2 text-teal-800 group cursor-pointer transition duration-300 sm:rounded-sm sm:py-1 sm:px-4 hover:bg-white'>
            <span className='hidden sm:block transition duration-300 group-hover:text-red-600'>
              все заказы
            </span>
            <ArrowRight
              size={16}
              className='transition duration-300 group-hover:text-red-600'
            />
          </div>

          {/** Дата и время заказа */}
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
              className={cn(
                'text-white p-2 px-5 border-t border-r border-[#8486ec] rounded-tr-3xl',
                { 'bg-[#ff0000]': status === OrderStatus.PENDING },
                { 'bg-green-600': status === OrderStatus.SUCCES }
              )}
            >
              {status === OrderStatus.PENDING && (
                <span className='font-bold'>Новый</span>
              )}
              {status === OrderStatus.SUCCES && (
                <span className='font-bold'>Выполнен</span>
              )}
            </div>
          </div>

          {status === OrderStatus.PENDING && (
            <Button
              variant='status'
              size='status'
              onClick={handleShowChangeStatusModal}
            >
              Выполнить
            </Button>
          )}

          <span className='text-[14px] p-2 px-3 sm:px-5'>
            <b>{totalAmount}</b>&nbsp;руб
          </span>
        </div>
      </div>
    </>
  );
};
