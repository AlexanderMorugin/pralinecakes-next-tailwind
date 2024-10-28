import { Product } from '@prisma/client';
import { axiosInstance } from './axios-instance';
import { Routes } from '@/constants/routes';

export const searchProduct = async (query: string): Promise<Product[]> => {
  return (
    await axiosInstance.get<Product[]>(Routes.PRODUCTS_SEARCH, {
      params: { query },
    })
  ).data;
};
