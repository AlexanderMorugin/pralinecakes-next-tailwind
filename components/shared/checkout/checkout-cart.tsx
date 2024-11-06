import { type FC } from 'react';
// import { CheckoutItem, CheckoutItemSkeleton, WhiteBlock } from '..';
// import { ProductSize, ProductType } from '@/constants/constants';
// import { getCartItemDetails } from '@/lib';
import { CartStateItem } from '@/lib/get-cart-details';
import { WhiteBlock } from '..';

interface Props {
  items: CartStateItem[];
  handleClickCountButton: (
    id: number,
    quantity: number,
    type: 'plus' | 'minus'
  ) => void;
  loading?: boolean;
  removeCartItem: (id: number) => void;
}

export const CheckoutCart: FC<Props> = ({
  // items,
  // handleClickCountButton,
  // removeCartItem,
  // loading,
}) => {
  return (

    <WhiteBlock title='1. Корзина' contentClassName='flex flex-col gap-5'></WhiteBlock>
    //   {loading
    //     ? [...Array(4)].map((_, index) => (
    //         <CheckoutItemSkeleton key={index} className='h-20' />
    //       ))
    //     : items.map((item) => (
    //         <CheckoutItem
    //           key={item.id}
    //           id={item.id}
    //           imageUrl={item.imageUrl}
    //           details={getCartItemDetails(
    //             item.ingredients,
    //             item.productType as ProductType,
    //             item.productSize as ProductSize
    //           )}
    //           name={item.name}
    //           price={item.productPrice}
    //           quantity={item.quantity}
    //           disabled={item.disabled}
    //           handleClickCountButton={(type) =>
    //             handleClickCountButton(item.id, item.quantity, type)
    //           }
    //           onClickRemove={() => removeCartItem(item.id)}
    //         />
    //       ))}
    // </WhiteBlock>
  );
};
