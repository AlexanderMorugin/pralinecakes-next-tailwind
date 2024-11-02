'use client';

import { Product } from '@prisma/client';
import { type FC } from 'react';
import { cn } from '@/lib/utils';
import { Title } from '.';
import { Button } from '../ui';
import { useCartStore } from '@/store';
import toast from 'react-hot-toast';

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

      toast.success(product.name + ' успешно добавлен в корзину', {
        icon: '✅',
      });
      _onSubmit?.();
    } catch (error) {
      console.log('', error);
      toast.error('Не удаллось добавить продукт в корзину', {
        icon: '❌',
      });
    }
  };

  return (
    <div className={cn('flex flex-col md:flex-row', className)}>
      <div className='flex flex-1 items-center justify-center relative w-full'>
        <img
          src={product.imageUrl}
          alt={product.name}
          className='relative transition-all duration-300 z-10 w-full h-full object-cover'
        />
      </div>

      <div className='w-full bg-[#f7f6f5] p-7 md:max-w-[400px]'>
        <Title text={product.name} size='md' className='font-extrabold mb-1' />
        <p>{product.description}</p>

        <Button
          loading={loading}
          className='h-[55px] px-10 text-base rounded-[18px] w-full mt-10'
          onClick={() => onSubmit?.()}
        >
          Добавить в корзину за {product.price} р
        </Button>
      </div>
    </div>
  );
};
