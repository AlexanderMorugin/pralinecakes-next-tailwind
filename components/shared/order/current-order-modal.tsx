import { type FC } from 'react';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import { Order } from '@prisma/client';

import { CurrentOrderContentModal } from './current-order-content-modal';

interface Props {
  showCurrentOrderModal: boolean;
  onClose: () => void;
  item: Order;
  className?: string;
}

export const CurrentOrderModal: FC<Props> = ({
  showCurrentOrderModal,
  onClose,
  item,
  className,
}) => {
  return (
    <Dialog open={Boolean(showCurrentOrderModal)} onOpenChange={onClose}>
      <DialogContent
        className={cn('w-full max-w-[400px] max-h-full', className)}
      >
        {/** Скрываем в консоли ошибки по поводу Титла и Дескрипшн */}
        <DialogTitle className='hidden' />
        <DialogDescription className='hidden' />

        <CurrentOrderContentModal item={item} />
      </DialogContent>
    </Dialog>
  );
};
