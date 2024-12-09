import { Order } from '@prisma/client';

export const getOrderDetails = (data: Order) => {


  const order = data.map((item) => ({
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

  return {order};
};
