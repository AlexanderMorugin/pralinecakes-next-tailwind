import { type FC } from 'react';
import Link from 'next/link';
import { Plus, ShoppingCart } from 'lucide-react';
import toast from 'react-hot-toast';

import { TProduct } from './product-list';
import { Button } from '../ui/button';
import { useCartStore } from '@/store';
import { ToastSuccess } from './toast-success';

export const ProductCard: FC<TProduct> = ({ product }) => {
  const { addCartItem, loading } = useCartStore((state) => state);

  const onClick = async () => {
    try {
      await addCartItem({
        productId: product.id,
      });

      ToastSuccess({ title: product.name + ' добавлен в корзину' });
    } catch (error) {
      console.log('не удаллось добавить в корзину', error);
      toast.error(product.name + ' не удаллось добавить в корзину', {
        icon: '❌',
      });
    }
  };

  return (
    <li className='relative flex flex-col border border-solid border-orange-600/30 pb-2 rounded-lg overflow-hidden transition duration-300 group hover:shadow-lg hover:shadow-gray-400'>
      <Link href={`/product/${product.id}`}>
        <img
          src={product.imageUrl}
          alt={product.name}
          className='w-full h-[120px] object-cover sm:h-[200px]'
        />
        <div className='p-2 sm:p-4'>
          <h3 className='line-clamp-1 text-[16px] font-bold transition duration-300 sm:text-[18px] group-hover:text-primary'>
            {product.name}
          </h3>
          <p className='line-clamp-2 text-[14px] text-gray-600 transition duration-300 sm:text-[16px] group-hover:text-black'>
            {product.description}
          </p>
        </div>
        <div className='flex items-center justify-between font-bold px-2 sm:px-4'>
          <span>{product.price} р</span>
        </div>
      </Link>

      <Button variant='cart' size='cart' onClick={onClick} loading={loading}>
        <ShoppingCart className='sm:hidden' />

        <span className='hidden sm:flex sm:gap-3'>
          <Plus size={20} />
          Добавить
        </span>
      </Button>
    </li>
  );
};
