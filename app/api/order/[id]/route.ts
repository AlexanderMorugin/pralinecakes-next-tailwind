import { updateCurrentOrderStatus } from '@/lib/update-current-order-status';
import { prisma } from '@/prisma/prisma-client';
import { OrderStatus } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = Number(params.id);
    const data = (await req.json()) as { status: OrderStatus };

    const orderItem = await prisma.order.findFirst({
      where: {
        id,
      },
    });

    if (!orderItem) {
      return NextResponse.json({
        message: '[API_ORDER_ID_PATCH] - Заказ не найден',
      });
    }

    await prisma.order.update({
      where: {
        id,
      },
      data: {
        status: data.status,
      },
    });

    const updateOrder = await updateCurrentOrderStatus(id);
    return NextResponse.json(updateOrder);
  } catch (error) {
    console.log('[ORDER_PATCH] ServerError ', error);
    return NextResponse.json(
      { message: 'Не удалось обновить заказ' },
      { status: 500 }
    );
  }
}
