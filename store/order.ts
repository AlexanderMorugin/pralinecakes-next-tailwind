import { getOrderDetails } from '@/lib/get-order-details';
import { Api } from '@/services/api-client';
import { Order } from '@prisma/client';
import { create } from 'zustand';

export interface OrderState {
  loading: boolean;
  error: boolean;
  order: Order[];

  getOrders: () => Promise<void>;
}

export const useOrderStore = create<OrderState>((set) => ({
  loading: false,
  error: false,
  order: [],

  getOrders: async () => {
    try {
      set({ loading: true, error: false });
      const data: Order = await Api.order.getOrderService();

      set(getOrderDetails(data));

      // console.log('useOrderStore: ', data);
    } catch (error) {
      console.error(error);
    } finally {
      set({ loading: false });
    }
  },
}));
