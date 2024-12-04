'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from '@/components/ui/dialog';
import { type FC } from 'react';
import { cn } from '@/lib/utils';
import { Product } from '@prisma/client';
import { useRouter } from 'next/navigation';
import { ProductForm } from '..';

interface Props {
  product: Product;
  className?: string;
}

export const ProductModal: FC<Props> = ({ product, className }) => {
  const router = useRouter();

  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <DialogContent
        className={cn('w-full max-w-[1060px] max-h-full', className)}
      >
        {/** Скрываем в консоли ошибки по поводу Титла и Дескрипшн */}
        <DialogTitle className='hidden' />
        <DialogDescription className='hidden' />

        <ProductForm product={product} onSubmit={() => router.back()} />
      </DialogContent>
    </Dialog>
  );
};
