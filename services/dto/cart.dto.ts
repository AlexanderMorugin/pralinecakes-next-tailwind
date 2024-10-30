import { Cart, CartItem, Product } from '@prisma/client';

export type CartItemDTO = CartItem & {
  product: Product;
};

export interface CartDTO extends Cart {
  cartItems: CartItemDTO[];
}

// export interface CreateCartItemValues {
//   productItemId: number;
//   ingredients?: number[];
//   // quantity: number;
// }
