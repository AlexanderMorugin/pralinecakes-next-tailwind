import { CartStateItem, getCartDetails } from '@/lib/get-cart-details';
import { Api } from '@/services/api-client';
import { CreateCartItemDTOValues } from '@/services/dto/cart.dto';
import { create } from 'zustand';

export interface CartState {
  loading: boolean;
  error: boolean;
  totalAmount: number;
  quantity: number;
  cartItems: CartStateItem[];
  /** Получение товаров из корзины */
  getCartItems: () => Promise<void>;
  /** Запрос на обновление количества товара */
  updateCartItemQuantity: (id: number, quantity: number) => Promise<void>;
  /** Запрос на добавление товара */
  addCartItem: (values: CreateCartItemDTOValues) => Promise<void>;
  /** Запрос на удаление товара */
  removeCartItem: (id: number) => Promise<void>;
}

export const useCartStore = create<CartState>((set) => ({
  loading: false,
  error: false,
  totalAmount: 0,
  quantity: 0,
  cartItems: [],

  getCartItems: async () => {
    try {
      set({ loading: true, error: false });
      const data = await Api.cart.getCartService();
      set(getCartDetails(data));
    } catch (error) {
      console.error(error);
    } finally {
      set({ loading: false });
    }
  },

  updateCartItemQuantity: async (id: number, quantity: number) => {
    try {
      set({ loading: true, error: false });
      const data = await Api.cart.updateItemQuantityService(id, quantity);
      set(getCartDetails(data));
    } catch (error) {
      console.error(error);
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },

  addCartItem: async (value: CreateCartItemDTOValues) => {
    try {
      set({ loading: true, error: false });
      const data = await Api.cart.addCartItemService(value);
      set(getCartDetails(data));
    } catch (error) {
      console.error(error);
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },

  removeCartItem: async (id: number) => {
    try {
      set({ loading: true, error: false });
      const data = await Api.cart.removeCartItemService(id);
      set(getCartDetails(data));
    } catch (error) {
      console.error(error);
    } finally {
      set({ loading: false });
    }
  },
}));
