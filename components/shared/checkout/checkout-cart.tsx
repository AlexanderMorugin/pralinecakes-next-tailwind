import { type FC } from 'react';
import { CartStateItem } from '@/lib/get-cart-details';
import { CheckoutCartItem, CheckoutCartItemSkeleton, WhiteBlock } from '..';

interface Props {
  cartItems: CartStateItem[];
  loading?: boolean;
  totalAmount?: number;
}

export const CheckoutCart: FC<Props> = ({
  cartItems,
  loading,
  totalAmount,
}) => {
  return (
    <WhiteBlock title='Корзина' contentClassName='flex flex-col gap-5'>
      <ul className='flex flex-col gap-2'>
        {loading || !totalAmount
          ? [...Array(4)].map((_, i) => <CheckoutCartItemSkeleton key={i} />)
          : cartItems.map((item) => (
              <CheckoutCartItem
                key={item.id}
                imageUrl={item.imageUrl}
                name={item.name}
                description={item.description}
                price={item.price}
                quantity={item.quantity}
              />
            ))}
      </ul>
    </WhiteBlock>
  );
};
