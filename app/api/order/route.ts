import { prisma } from '@/prisma/prisma-client';
import { NextResponse } from 'next/server';

export async function GET() {
  const orders = await prisma.order.findMany();

  return NextResponse.json(orders);
}
