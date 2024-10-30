// import { getCartDetails } from '@/lib';

import { CartStateItem, getCartDetails } from '@/lib/get-cart-details';
import { Api } from '@/services/api-client';
// import { CreateCartItemValues } from '@/services/dto/cart.dto';
import { CartItem } from '@prisma/client';
import { create } from 'zustand';



export interface CartState {
  loading: boolean;
  error: boolean;
  totalAmount: number;
  quantity: number;
  cartItems: CartStateItem[];
  /** Получение товаров из корзины */
  fetchCartItems: () => Promise<void>;
  /** Запрос на обновление количества товара */
  updateItemQuantity: (id: number, quantity: number) => Promise<void>;
  /** Запрос на добавление товара */
  addCartItem: (values: CartItem) => Promise<void>;
  /** Запрос на удаление товара */
  removeCartItem: (id: number) => Promise<void>;
}

export const useCartStore = create<CartState>((set) => ({
  loading: true,
  error: false,
  totalAmount: 0,
  quantity: 0,
  cartItems: [],

  fetchCartItems: async () => {
    try {
      set({ loading: true, error: false });
      const data = await Api.cart.getCart();
      set(getCartDetails(data));
    } catch (error) {
      console.error(error);
    } finally {
      set({ loading: false });
    }
  },

  updateItemQuantity: async () => {},
  addCartItem: async () => {},
  removeCartItem: async () => {},
}));

//   fetchCartItems: async () => {
// try {
//   set({ loading: true, error: false });
//   const data = await Api.cart.getCart();
//   set(getCartDetails(data));
// } catch (error) {
//   console.error(error);
// } finally {
//   set({ loading: false });
// }
// },

// updateItemQuantity: async () =>
// id: number, quantity: number
// {
// try {
//   set({ loading: false, error: false });
//   const data = await Api.cart.updateItemQuantity(id, quantity);
//   set(getCartDetails(data));
// } catch (error) {
//   console.error(error);
// } finally {
//   set({ loading: false });
// }
// },

// removeCartItem: async () =>
// id: number
// {
// try {
//   set((state) => ({
//     loading: true,
//     error: false,
//     items: state.items.map((item) =>
//       item.id === id ? { ...item, disabled: true } : item
//     ),
//   }));
//   const data = await Api.cart.removeCartItem(id);
//   set(getCartDetails(data));
// } catch (error) {
//   console.error(error);
//   set({ error: true });
// } finally {
//   set((state) => ({
//     loading: false,
//     items: state.items.map((item) => ({ ...item, disabled: false })),
//   }));
// }
//   },

// addCartItem: async () =>
// values: CreateCartItemValues
// {
// try {
//   set({
//     loading: true,
//     error: false,
//   });
//   const data = await Api.cart.addCartItem(values);
//   set(getCartDetails(data));
// } catch (error) {
//   console.error(error);
//   set({ error: true });
// } finally {
//   set((state) => ({
//     loading: false,
//     items: state.items.map((item) => ({ ...item, disabled: false })),
//   }));
// }
// },
// })
// );
