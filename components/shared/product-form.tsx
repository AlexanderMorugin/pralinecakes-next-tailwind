'use client';

import { Product } from '@prisma/client';
import { type FC } from 'react';
import { cn } from '@/lib/utils';
import { Title } from '.';
import { Button } from '../ui';
import { useCartStore } from '@/store';
import toast from 'react-hot-toast';
import { ArrowRight } from 'lucide-react';
import { ToastSuccess } from './toast-success';

interface Props {
  product: Product;
  onSubmit?: VoidFunction;
  className?: string;
}

/**
 * Компонент ProductForm - форма выбора продукта, используется в ProductModal
 * @param {Product} product - продукт
 * @returns
 */

export const ProductForm: FC<Props> = ({
  product,
  className,
  onSubmit: _onSubmit,
}) => {
  const { addCartItem, loading } = useCartStore((state) => state);

  const onSubmit = async () => {
    try {
      await addCartItem({
        productId: product.id,
      });

      ToastSuccess({ title: product.name + ' добавлен в корзину' });

      _onSubmit?.();
    } catch (error) {
      console.log('', error);
      toast.error(product.name + ' не удаллось добавить в корзину', {
        icon: '❌',
      });
    }
  };

  return (
    <div
      className={cn(
        'flex flex-col bg-white rounded-xl overflow-hidden md:flex-row',
        className
      )}
    >
      <div className='flex flex-1 items-center justify-center relative w-full'>
        <img
          src={product.imageUrl}
          alt={product.name}
          className='relative transition-all duration-300 z-10 w-full h-full object-cover'
        />
      </div>

      <div className='flex flex-col justify-between w-full bg-[#f7f6f5] p-3 md:max-w-[400px] md:p-7'>
        <div>
          <Title text={product.name} size='md' className='font-bold mb-1' />
          <p className='line-clamp-5 md:line-clamp-none'>
            {product.description}
          </p>
          <p className='pt-4'>
            <b>{product.price}</b>&nbsp;р
          </p>
        </div>

        <Button
          loading={loading}
          className='h-[55px] px-4 text-base rounded-[18px] w-full mt-4 md:px-10'
          onClick={() => onSubmit?.()}
        >
          Добавить в корзину
          <ArrowRight className='w-5 ml-2' />
        </Button>
      </div>
    </div>
  );
};
