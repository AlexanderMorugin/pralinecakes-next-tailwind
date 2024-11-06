import { type FC } from 'react';
import { Equal } from 'lucide-react';
import { cn } from '@/lib/utils';
import { CartItemProps } from '../cart-item-details/cart-item-details.types';
import { CartItem } from '..';

interface Props extends CartItemProps {
  onClickRemove?: () => void;
  handleClickCountButton?: (type: 'plus' | 'minus') => void;
  className?: string;
}

export const CheckoutCartItem: FC<Props> = ({
  imageUrl,
  name,
  description,
  price,
  quantity,
  className,
}) => {
  return (
    <li
      className={cn(
        'flex flex-col border-b border-gray-100 pb-3 sm:flex-row',
        className
      )}
    >
      <div className='flex gap-3 flex-1'>
        <CartItem.Image src={imageUrl} />
        <CartItem.Info name={name} details={description} />
      </div>

      <div className='flex items-center justify-end gap-2 ml-3'>
        <span className='text-[14px] text-gray-800'>{quantity} шт</span>
        <Equal size={14} className='text-gray-400' />
        <CartItem.Price value={price} />
      </div>
    </li>
  );
};