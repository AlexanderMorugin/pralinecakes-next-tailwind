import { getOrderDetails } from '@/lib/get-order-details';
import { Api } from '@/services/api-client';
import { Order } from '@prisma/client';
import { create } from 'zustand';

export interface OrderState {
  loading: boolean;
  error: boolean;
  order: Order[];

  getOrders: () => Promise<void>;
  updateOrderStatus: (id: number, status: string) => Promise<void>;
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
    } catch (error) {
      console.error(error);
    } finally {
      set({ loading: false });
    }
  },

  updateOrderStatus: async (id: number, status: string) => {
    try {
      set({ loading: true, error: false });
      const data = await Api.order.updateOrderStatusService(id, status);
      set(getOrderDetails(data));
    } catch (error) {
      console.error(error);
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },
}));
