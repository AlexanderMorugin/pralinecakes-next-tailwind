import { prisma } from '@/prisma/prisma-client';
import { NextResponse } from 'next/server';

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
