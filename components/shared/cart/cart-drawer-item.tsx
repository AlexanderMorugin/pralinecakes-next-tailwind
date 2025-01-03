import { type FC } from 'react';
import { Trash2Icon } from 'lucide-react';

import { cn } from '@/lib/utils';

import { CartItemProps } from './cart-item-details/cart-item-details.types';
import { CartItem, CountButton } from '..';

interface Props extends CartItemProps {
  handleClickCountButton?: (type: 'plus' | 'minus') => void;
  onClickRemove?: () => void;
  className?: string;
}

export const CartDrawerItem: FC<Props> = ({
  imageUrl,
  name,
  description,
  price,
  quantity,
  handleClickCountButton,
  onClickRemove,
  disabled,
  className,
}) => {
  return (
    <li
      className={cn(
        'flex bg-white p-2 gap-2 mb-1 sm:gap-6',
        { 'opacity-50 pointer-events-none': disabled },
        className
      )}
    >
      <CartItem.Image src={imageUrl} />

      <div className='flex-1'>
        <CartItem.Info name={name} details={description} />
        <hr className='my-1' />

        <div className='flex items-center justify-between'>
          <CountButton onClick={handleClickCountButton} value={quantity} />

          <div className='flex items-center gap-3'>
            <CartItem.Price value={price} />

            <Trash2Icon
              className='text-gray-400 cursor-pointer hover:text-gray-600'
              size={16}
              onClick={onClickRemove}
            />
          </div>
        </div>
      </div>
    </li>
  );
};
