import { cn } from '@/lib/utils';
import { type FC } from 'react';
import * as CartItem from './cart-item-details';
import { CartItemProps } from './cart-item-details/cart-item-details.types';
import { Trash2Icon } from 'lucide-react';
import { CountButton } from '.';

interface Props extends CartItemProps {
  handleClickCountButton?: (type: 'plus' | 'minus') => void;
  onClickRemove: () => void;
  className?: string;
}

export const CartDrawerItem: FC<Props> = ({
  // id,
  imageUrl,
  // details,
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
        'flex bg-white p-5 gap-6 mb-2',
        { 'opacity-50 pointer-events-none': disabled },
        className
      )}
    >
      <CartItem.Image src={imageUrl} />

      <div className='flex-1'>
        <CartItem.Info name={name} details={description} />
        <hr className='my-3' />

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
