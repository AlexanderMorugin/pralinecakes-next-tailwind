/* eslint-disable @typescript-eslint/no-explicit-any */
import { OrderProps } from '@/components/shared/orders-form';

export const getOrderDetails = (data: OrderProps) => {
  const order = data.map((item: any) => ({
    id: item.id,
    createdAt: String(item.createdAt),
    userId: item.userId,
    token: item.token,
    totalAmount: item.totalAmount,
    status: item.status,
    paymentId: item.paymentId,
    firstName: item.firstName,
    lastName: item.lastName,
    email: item.email,
    address: item.address,
    phone: item.phone,
    items: JSON.parse(item.items),
    comments: item.comments,
  }));

  // console.log(order)

  return { order };
};