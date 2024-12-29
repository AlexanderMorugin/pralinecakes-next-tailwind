import { NextResponse } from 'next/server';

import { prisma } from '@/prisma/prisma-client';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  const orders = await prisma.order.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

  return NextResponse.json(orders);
}
