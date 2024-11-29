import { axiosInstance } from './axios-instance';
import { CartDTO, CreateCartItemDTOValues } from './dto/cart.dto';

export const getCartService = async (): Promise<CartDTO> => {
  return (await axiosInstance.get<CartDTO>('/cart')).data;
};

export const updateItemQuantityService = async (
  itemId: number,
  quantity: number
): Promise<CartDTO> => {
  return (await axiosInstance.patch<CartDTO>('/cart/' + itemId, { quantity }))
    .data;
};

export const removeCartItemService = async (itemId: number): Promise<CartDTO> => {
  return (await axiosInstance.delete<CartDTO>('/cart/' + itemId)).data;
};

export const addCartItemService = async (
  value: CreateCartItemDTOValues
): Promise<CartDTO> => {
  return (await axiosInstance.post<CartDTO>('/cart', value)).data;
};
