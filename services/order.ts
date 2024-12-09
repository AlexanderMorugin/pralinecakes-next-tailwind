import { Order } from '@prisma/client';
import { axiosInstance } from './axios-instance';


export const getOrderService = async (): Promise<Order> => {
  return (await axiosInstance.get('/orders')).data;
};