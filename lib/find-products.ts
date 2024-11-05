import { prisma } from '@/prisma/prisma-client';

export const findProducts = async () => {
  const categories = await prisma.category.findMany({
    include: {
      products: {
        orderBy: {
          id: 'asc',
        },
      },
    },
  });

  return categories;
};
