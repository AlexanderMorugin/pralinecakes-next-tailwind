import { type FC } from 'react';

import { CheckoutCartItem } from '..';

type CartItems = {
  id: number;
  name: string;
  quantity: number;
};

interface Props {
  cartItems: CartItems[];
}

export const CheckoutSendCart: FC<Props> = ({ cartItems }) => {
  return (
    <ul className='flex flex-col gap-3'>
      {cartItems.map((item) => (
        <CheckoutCartItem
          key={item.id}
          name={item.name}
          quantity={item.quantity}
          isCheckoutSendCart={true}
        />
      ))}
    </ul>
  );
};
