'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import { type FC } from 'react';
import { CheckoutFormValues } from './checkout-form-schema';
import { СheckoutSendForm } from '.';
import { useRouter } from 'next/navigation';
import { CartItem } from '@prisma/client';

interface Props {
  showModal: boolean;
  data: CheckoutFormValues;
  className?: string;
}

export const CheckoutModal: FC<Props> = ({ showModal, data, className }) => {
  const router = useRouter();

  return (
    <Dialog open={Boolean(showModal)} onOpenChange={() => router.back()}>
      <DialogContent className={cn('p-5 w-full max-h-full overflow-auto bg-white', className)}>
        <DialogTitle className='hidden' />
        <DialogDescription className='flex flex-col text-base text-black'>
          <span className='text-lg font-bold'>Благодарим за заказ!</span>
          <span>Наш менеджер свяжется с вами по указанному телефону.</span>
        </DialogDescription>

        <СheckoutSendForm data={data} />
      </DialogContent>
    </Dialog>
  );
};
