import { type FC } from 'react';
import { CartStateItem } from '@/lib/get-cart-details';
import { CheckoutCartItem, WhiteBlock } from '..';

interface Props {
  cartItems: CartStateItem[];
}

export const CheckoutCart: FC<Props> = ({ cartItems }) => {
  return (
    <WhiteBlock title='1. Корзина' contentClassName='flex flex-col gap-5'>
      <ul className='flex flex-col gap-5'>
        {cartItems.map((item) => (
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
