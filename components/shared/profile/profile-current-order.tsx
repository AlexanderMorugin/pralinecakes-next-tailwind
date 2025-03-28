'use client';

import { useState, type FC } from 'react';

import { cn } from '@/lib/utils';
import { Order, OrderStatus } from '@prisma/client';

import { CurrentOrderModal } from '../order/current-order-modal';

interface Props {
  item: Order;
}

export const ProfileCurrentOrder: FC<Props> = ({ item }) => {
  const d = new Date(item.createdAt);
  const date = d.toLocaleString().slice(0, 17);

  const [showCurrentOrderModal, setShowCurrentOrderModal] = useState(false);

  const onClose = () => {
    setShowCurrentOrderModal(false);
  };
  const handleShowCurrentOrderModal = () => {
    setShowCurrentOrderModal(true);
  };

  return (
    <>
      {/** Модальное окно с кнопками подтверждения */}
      {showCurrentOrderModal && (
        <CurrentOrderModal
          showCurrentOrderModal={showCurrentOrderModal}
          onClose={onClose}
          item={item}
        />
      )}

      <li
        onClick={handleShowCurrentOrderModal}
        className='grid grid-cols-3 gap-2 bg-white rounded-md py-1 px-2 cursor-pointer'
      >
        <div>
          <span className='text-[12px]'>{date}</span>
          <div
            className={cn(
              { 'text-[#ff0000]': item.status === OrderStatus.PENDING },
              { 'text-green-600': item.status === OrderStatus.SUCCES }
            )}
          >
            {item.status === OrderStatus.PENDING && (
              <span className='text-[14px]'>Готовится</span>
            )}
            {item.status === OrderStatus.SUCCES && (
              <span className='text-[14px]'>Выполнен</span>
            )}
          </div>
        </div>

        <div className='flex items-center justify-center text-[14px]'>
          <span>Детали...</span>
        </div>

        <div className='flex flex-col justify-between items-end'>
          <span className='text-[14px]'>
            <b>{item.totalAmount}</b> руб
          </span>
        </div>
      </li>
    </>
  );
};
