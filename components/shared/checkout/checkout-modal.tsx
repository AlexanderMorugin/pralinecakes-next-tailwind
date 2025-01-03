'use client';

import { type FC } from 'react';
import { useRouter } from 'next/navigation';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from '@/components/ui/dialog';
import { cn } from '@/lib/utils';

import { CheckoutFormValues } from './checkout-form-schema';
import { СheckoutSendForm } from '.';

interface Props {
  showModal: boolean;
  data: CheckoutFormValues;
  className?: string;
}

export const CheckoutModal: FC<Props> = ({ showModal, data, className }) => {
  const router = useRouter();

  return (
    <Dialog open={Boolean(showModal)} onOpenChange={() => router.back()}>
      <DialogContent className={cn('w-full', className)}>
        {/** Скрываем в консоли ошибки по поводу Титла и Дескрипшн */}
        <DialogTitle className='hidden' />
        <DialogDescription className='hidden' />

        <СheckoutSendForm data={data} />
      </DialogContent>
    </Dialog>
  );
};
