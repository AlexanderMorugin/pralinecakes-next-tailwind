/* eslint-disable @typescript-eslint/no-explicit-any */

import { OrderProps } from '@/components/shared/order/orders-form';

export const getOrderDetails = (data: OrderProps) => {
  const order = data.map((item: any) => ({
    id: item.id,
    createdAt: item.createdAt,
    totalAmount: item.totalAmount,
    status: item.status,
    userId: item.userId,
    firstName: item.firstName,
    lastName: item.lastName,
    email: item.email,
    address: item.address,
    phone: item.phone,
    items: JSON.parse(item.items),
    comments: item.comments,
  }));

  return { order };
};
