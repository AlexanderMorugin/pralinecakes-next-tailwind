import { Product } from '@prisma/client';
import { Routes } from '@/constants/routes';

import { axiosInstance } from './axios-instance';

export const searchProduct = async (query: string): Promise<Product[]> => {
  return (
    await axiosInstance.get<Product[]>(Routes.PRODUCTS_SEARCH, {
      params: { query },
    })
  ).data;
};
