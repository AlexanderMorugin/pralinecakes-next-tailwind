import { notFound } from 'next/navigation';

import { ProductModal } from '@/components/shared';
import { prisma } from '@/prisma/prisma-client';

export default async function ProductModalPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const product = await prisma.product.findFirst({
    where: {
      id: Number(id),
    },
  });

  if (!product) {
    notFound();
  }

  return <ProductModal product={product} />;
}
