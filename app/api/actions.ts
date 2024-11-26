'use server';

import { PayOrderTemplate } from '@/components/shared';
import { CheckoutFormValues } from '@/components/shared/checkout/checkout-form-schema';
import { sendEmail } from '@/lib/send-email';
import { prisma } from '@/prisma/prisma-client';
import { OrderStatus } from '@prisma/client';
import { cookies } from 'next/headers';

export async function createOrder(data: CheckoutFormValues) {
  try {
    const cookieStore = cookies();
    const cartToken = cookieStore.get('cartToken')?.value;

    if (!cartToken) {
      throw new Error('Token not found');
    }

    /** Находим корзину по токену */
    const userCart = await prisma.cart.findFirst({
      include: {
        user: true,
        cartItems: {
          include: {
            product: true,
          },
        },
      },
      where: {
        token: cartToken,
      },
    });

    /** Если корзина не найдена, возвращаем ошибку */
    if (!userCart) {
      throw new Error('Корзина не найдена');
    }

    /** Если корзина пуста, возвращаем ошибку */
    if (userCart?.totalAmount === 0) {
      throw new Error('Корзина пуста');
    }

    /** Создаем заказ */
    const order = await prisma.order.create({
      data: {
        token: cartToken,
        fullName: data.firstName + ' ' + data.lastName,
        email: data.email,
        phone: data.phone,
        address: data.address,
        comments: data.comment,
        totalAmount: userCart.totalAmount,
        status: OrderStatus.PENDING,
        items: JSON.stringify(userCart.cartItems),
      },
    });

    /** Очищаем стоимость корзины */
    await prisma.cart.update({
      where: {
        id: userCart.id,
      },
      data: {
        totalAmount: 0,
      },
    });

    /** Удаляем товары из корзины */
    await prisma.cartItem.deleteMany({
      where: {
        cartId: userCart.id,
      },
    });

    // TODO: Сделать создание ссылки оплаты

    /** Отправляем письмо на почту клиенту */
    await sendEmail(
      data.email,
      'Кондитерская "Пралине" - Подтверждение оплаты заказа #' + order.id,
      PayOrderTemplate({
        orderId: order.id,
        totalAmount: order.totalAmount,
        paymentUrl: 'https://pralinecakes.ru/',
        // items: userCart.cartItems,
      })
    );

    return "https://pralinecakes.ru/"
  } catch (error) {
    console.log('[CreateOrder] Server error ', error);
  }
}
