import { Product } from '@prisma/client';

export type ProductWithRelations = Product & {
  items: Product[];
};
