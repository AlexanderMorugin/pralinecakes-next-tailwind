import { create } from 'zustand';

import { getOrderDetails } from '@/lib/get-order-details';
import { Api } from '@/services/api-client';
import { Order, OrderStatus } from '@prisma/client';

export interface OrderState {
  loading: boolean;
  error: boolean;
  status: OrderStatus;
  order: Order[];

  getOrders: () => Promise<void>;

  updateOrderStatus: (id: number, status: OrderStatus) => Promise<void>;
}

export const useOrderStore = create<OrderState>((set) => ({
  loading: false,
  error: false,
  status: OrderStatus.PENDING,
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

  updateOrderStatus: async (id: number, status: OrderStatus) => {
    try {
      set({ loading: true, error: false });
      const data: Order = await Api.order.updateOrderStatusService(id, status);
      set({
        status: data.status,
      });
    } catch (error) {
      console.error('[ORDER_STORE_PATCH] ServerError ', error);
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },
}));
