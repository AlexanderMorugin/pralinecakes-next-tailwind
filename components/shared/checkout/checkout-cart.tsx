import { type FC } from 'react';
import { CartStateItem } from '@/lib/get-cart-details';
import { CheckoutCartItem, WhiteBlock } from '..';

interface Props {
  cartItems: CartStateItem[];
  // loading?: boolean;
}

export const CheckoutCart: FC<Props> = ({
  cartItems,
  // handleClickCountButton,
  // removeCartItem,
  // loading,
}) => {
  return (
    <WhiteBlock title='1. Корзина' contentClassName='flex flex-col gap-5'>
      {/* // {loading
      //   ? [...Array(4)].map((_, index) => (
      //       <CheckoutItemSkeleton key={index} className='h-20' />
      //     ))
      //   :  */}
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
