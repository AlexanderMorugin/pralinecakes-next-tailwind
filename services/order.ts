import { Order, OrderStatus } from '@prisma/client';
import { axiosInstance } from './axios-instance';

export const getOrderService = async (): Promise<Order> => {
  return (await axiosInstance.get('/order')).data;
};

export const updateOrderStatusService = async (
  id: number,
  status: OrderStatus
): Promise<Order> => {
  return (await axiosInstance.patch('/order/' + id, { status })).data;
};
