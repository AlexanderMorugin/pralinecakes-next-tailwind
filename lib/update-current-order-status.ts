import { prisma } from '@/prisma/prisma-client';
import { OrderStatus } from '@prisma/client';

export const updateCurrentOrderStatus = async (id: number) => {
  const orderCart = await prisma.order.findFirst({
    where: {
      id,
    },
  });

  if (!orderCart) {
    return;
  }

  return await prisma.order.update({
    where: {
      id: id,
    },
    data: {
      status: OrderStatus.SUCCES,
    },
  });
};
