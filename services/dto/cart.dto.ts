import { Cart, CartItem, Product } from '@prisma/client';

export type CartItemDTO = CartItem & {
  product: Product;
};

export interface CartDTO extends Cart {
  cartItems: CartItemDTO[];
}

export interface CreateCartItemDTOValues {
  productId: number;
  // userId: number;
}
