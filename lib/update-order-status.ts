import { prisma } from '@/prisma/prisma-client';
// import { calcCartItemTotalPrice } from './calc-cart-item-total-price';
import { OrderStatus } from '@prisma/client';

export const updateOrderStatus = async (id: number) => {
  const orderCart = await prisma.order.findFirst({
    where: {
      id,
    },
  });

  if (!orderCart) {
    return;
  }

  // const totalAmount = userCart.cartItems.reduce((acc, item) => {
  //   return acc + calcCartItemTotalPrice(item);
  // }, 0);

  return await prisma.order.update({
    where: {
      id: id,
    },
    data: {
      status: OrderStatus.SUCCES,
    },
    // include: {
    //   cartItems: {
    //     orderBy: {
    //       createdAt: 'desc',
    //     },
    //     include: {
    //       product: true,
    //     },
    //   },
    // },
  });
};
