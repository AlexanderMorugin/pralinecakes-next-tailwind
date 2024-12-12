import { Order } from '@prisma/client';
import { axiosInstance } from './axios-instance';


export const getOrderService = async (): Promise<Order> => {
  return (await axiosInstance.get('/orders')).data;
};

export const updateOrderStatusService = async (
  id: number,
  status: string
): Promise<Order> => {
  return (await axiosInstance.patch('/orders/' + id, { status }))
    .data;
};