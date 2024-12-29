import { type FC } from 'react';

import { cn } from '@/lib/utils';

import { CartItemProps } from '../cart/cart-item-details/cart-item-details.types';
import { CartItem } from '..';

interface Props extends CartItemProps {
  onClickRemove?: () => void;
  handleClickCountButton?: (type: 'plus' | 'minus') => void;
  isCheckoutSendCart?: boolean;
  className?: string;
}

export const CheckoutCartItem: FC<Props> = ({
  imageUrl,
  name,
  description,
  price,
  quantity,
  isCheckoutSendCart = false,
  className,
}) => {
  return (
    <li
      className={cn(
        'flex border-b border-gray-100 pb-3',
        { 'flex-row pb-1': isCheckoutSendCart },
        className
      )}
    >
      <div className='flex gap-3 flex-1'>
        <CartItem.Image src={imageUrl} />
        <CartItem.Info name={name} details={description} />
      </div>

      <div className='flex items-center justify-end gap-2 pl-3'>
        <span className='text-[14px] text-gray-800'>{quantity}шт</span>
        <CartItem.Price value={price} />
      </div>
    </li>
  );
};
