import Link from 'next/link';
import { type FC } from 'react';
import { Title } from '.';
import { TProduct } from './product-list';
import { Button } from '../ui/button';
import { Plus } from 'lucide-react';

export const ProductCard: FC<TProduct> = ({
  id,
  imageUrl,
  name,
  description,
  price,
}) => {
  return (
    <Link
      href={`/product/${id}`}
      className='flex flex-col border border-solid border-orange-600/50 rounded-lg overflow-hidden transition duration-300 group hover:shadow hover:shadow-lg hover:shadow-gray-400'
    >
      <img
        src={imageUrl}
        alt={name}
        className='w-full h-[200px] object-cover'
      />
      <div className='p-4'>
        <Title
          size='sm'
          text={name}
          className='font-bold transition duration-300 group-hover:text-primary'
        />
        <p className='text-gray-600 transition duration-300 group-hover:text-black'>
          {description}
        </p>
      </div>
      <div className='flex items-center justify-between px-4 pb-2'>
        <span>{price} р</span>
        <Button variant='cart' className='text-base font-bold'>
          <Plus size={20} className='mr-1' />
          Добавить
        </Button>
      </div>
    </Link>
  );
};
