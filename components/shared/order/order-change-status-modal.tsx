import { type FC } from 'react';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import { OrderStatus } from '@prisma/client';

import { OrderChangeStatusForm } from './order-change-status-form';

interface Props {
  showChangeStatus: boolean;
  onClose: () => void;
  id: number;
  status: OrderStatus;
  className?: string;
}

export const OrderChangeStatusModal: FC<Props> = ({
  showChangeStatus,
  onClose,
  id,
  status,
  className,
}) => {
  return (
    <Dialog open={Boolean(showChangeStatus)} onOpenChange={onClose}>
      <DialogContent
        className={cn('w-full max-w-[400px] max-h-full', className)}
      >
        {/** Скрываем в консоли ошибки по поводу Титла и Дескрипшн */}
        <DialogTitle className='hidden' />
        <DialogDescription className='hidden' />

        <OrderChangeStatusForm id={id} status={status} onClose={onClose} />
      </DialogContent>
    </Dialog>
  );
};
