'use client';

import { OrderStatus } from '@prisma/client';
import { type FC } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui';
import { useOrderStore } from '@/store/order';

interface Props {
  id: number;
  status: OrderStatus;
  onClose: () => void;
  className?: string;
}

export const OrderChangeStatusForm: FC<Props> = ({
  id,
  status,
  onClose,
  className,
}) => {
  const { getOrders, updateOrderStatus, loading } = useOrderStore(
    (state) => state
  );

  const handleChangeStatus = async (id: number, status: OrderStatus) => {
    await updateOrderStatus(id, status);
    getOrders();
    onClose();
  };

  return (
    <div className={cn('flex flex-col bg-white rounded-xl p-4', className)}>
      <div className='flex flex-col items-center pb-4'>
        <span className='text-lg font-bold'>Внимание!</span>
        <span className='text-center'>
          Вы уверенны что хотите изменить статус заказа?
        </span>
      </div>
      <div className='flex justify-center gap-4'>
        <Button
          loading={loading}
          onClick={() => handleChangeStatus(id, status)}
          className='w-28'
        >
          Да
        </Button>
        <Button variant='outline' onClick={onClose} className='w-28'>
          Нет
        </Button>
      </div>
    </div>
  );
};
