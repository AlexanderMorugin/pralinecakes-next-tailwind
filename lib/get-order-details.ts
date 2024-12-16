/* eslint-disable @typescript-eslint/no-explicit-any */

import { OrderProps } from '@/components/shared/order/orders-form';

export const getOrderDetails = (data: OrderProps) => {
  const order = data.map((item: any) => ({
    id: item.id,
    createdAt: item.createdAt,
    token: item.token,
    totalAmount: item.totalAmount,
    status: item.status,
    firstName: item.firstName,
    lastName: item.lastName,
    email: item.email,
    address: item.address,
    phone: item.phone,
    items: JSON.parse(item.items),
    comments: item.comments,
  }));
  // .sort(
  //   (a: any, b: any) => Date.parse(b.createdAt) - Date.parse(a.createdAt)
  // );

  return { order };
};
