'use client';

import { Product } from '@prisma/client';
// import { ProductWithRelations } from '@/@types/prisma';
// import { useCartStore } from '@/store/cart';
import { type FC } from 'react';
// import toast from 'react-hot-toast';
// import { ChooseProductForm } from '.';
import { cn } from '@/lib/utils';
import { Title } from '.';
import { Button } from '../ui';

interface Props {
  product: Product;
  onSubmit?: VoidFunction;
  className?: string;
}

export const ProductForm: FC<Props> = ({
  product,
  className,
  // onSubmit: _onSubmit
}) => {
  // const { addCartItem, loading } = useCartStore((state) => state);

  // const firstItem = product.items[0];
  // const isProductWithItems = Boolean(firstItem.productType);

  // const onSubmit = async (productItemId?: number, ingredients?: number[]) => {
  //   try {
  //     const itemId = productItemId ?? firstItem.id;

  //     await addCartItem({
  //       productItemId: itemId,
  //       ingredients,
  //     });

  //     toast.success(product.name + ' успешно добавлен в корзину');
  //     _onSubmit?.()
  //     // router.back();
  //   } catch (error) {
  //     toast.error('Не удаллось добавить продукт в корзину');
  //     console.log(error);
  //   }
  // };

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
          // loading={loading}
          className='h-[55px] px-10 text-base rounded-[18px] w-full mt-10'
          // onClick={() => onSubmit?.()}
        >
          Добавить в корзину за {product.price} р
        </Button>
      </div>
    </div>
  );
};
