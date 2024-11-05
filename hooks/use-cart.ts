import { CartStateItem } from '@/lib/get-cart-details';
import { CreateCartItemValues } from '@/services/dto/cart.dto';
import { useCartStore } from '@/store/cart';
import { useEffect } from 'react';

type ReturnProps = {
  totalAmount: number;
  cartItems: CartStateItem[];
  loading: boolean;
  updateItemQuantity: (id: number, quantity: number) => void;
  removeCartItem: (id: number) => void;
  addCartItem: (values: CreateCartItemValues) => void;
};

export const useCart = (): ReturnProps => {
  const cartState = useCartStore((state) => state);

  useEffect(() => {
    cartState.fetchCartItems();
  }, []);

  return cartState;
};
