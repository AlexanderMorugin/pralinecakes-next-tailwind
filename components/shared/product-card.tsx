import Link from 'next/link';
import { type FC } from 'react';
import { Plus } from 'lucide-react';

import { Title } from '.';
import { TProduct } from './product-list';
import { Button } from '../ui/button';
// import toast from 'react-hot-toast';
// import { useCartStore } from '@/store';

export const ProductCard: FC<TProduct> = ({
  product,
  // id,
  // imageUrl,
  // name,
  // description,
  // price,
}) => {
  // const { addCartItem, loading } = useCartStore((state) => state);

  // const onSubmit = async () => {
  //   try {
  //     await addCartItem({
  //       productId: product.id,
  //     });

  //     toast.success(product.name + ' успешно добавлен в корзину', {
  //       icon: '✅',
  //     });
  //   } catch (error) {
  //     console.log('не удаллось добавить в корзину', error);
  //     toast.error(product.name + ' не удаллось добавить в корзину', {
  //       icon: '❌',
  //     });
  //   }
  // };
  return (
    // <div className='relative'>
      <Link
        href={`/product/${product.id}`}
        className='flex flex-col border border-solid border-orange-600/50 rounded-lg overflow-hidden transition duration-300 group hover:shadow-lg hover:shadow-gray-400'
      >
        <img
          src={product.imageUrl}
          alt={product.name}
          className='w-full h-[200px] object-cover'
        />
        <div className='p-4'>
          <Title
            size='sm'
            text={product.name}
            className='font-bold transition duration-300 group-hover:text-primary'
          />
          <p className='line-clamp-3 text-gray-600 transition duration-300 group-hover:text-black'>
            {product.description}
          </p>
        </div>
        <div className='flex items-center justify-between px-4 pb-2'>
          <span>{product.price} р</span>
          <Button
        variant='cart'
        className='text-base font-bold'
        // onSubmit={() => onSubmit()}
        // loading={loading}
      >
        <Plus size={20} />
        Добавить
      </Button>
        </div>
      </Link>

    // </div>
  );
};
