import { DELIVERY_PRICE, VAT } from '@/constants/constants';

export const useTotalPrice = (totalAmount: number) => {
  const vatPrice = Math.round((totalAmount * VAT) / 100);
  const totalPrice = totalAmount + vatPrice + DELIVERY_PRICE;

  return { vatPrice, totalPrice };
};
