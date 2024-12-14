'use server';

import {
  PayOrderTemplate,
  VerificationUserTemplate,
} from '@/components/shared';
import { CheckoutFormValues } from '@/components/shared/checkout/checkout-form-schema';
import { getUserSession } from '@/lib/get-user-session';
import { sendEmail } from '@/lib/send-email';
import { prisma } from '@/prisma/prisma-client';
import { OrderStatus, Prisma } from '@prisma/client';
import { hashSync } from 'bcrypt';
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
        // fullName: data.firstName + ' ' + data.lastName,
        firstName: data.firstName,
        lastName: data.lastName,
        phone: data.phone,
        email: data.email,        
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
        paymentUrl: 'https://pralinecakes-next-tailwind.vercel.app/',
        // items: userCart.cartItems,
      })
    );

    return 'https://pralinecakes-next-tailwind.vercel.app/';
  } catch (error) {
    console.log('[CreateOrder] Server error ', error);
  }
}

export async function updateUserInfo(body: Prisma.UserUpdateInput) {
  try {
    const currentUser = await getUserSession();

    if (!currentUser) {
      throw new Error('Пользователь не найден');
    }

    const findUser = await prisma.user.findFirst({
      where: {
        id: Number(currentUser.id),
      },
    });

    await prisma.user.update({
      where: {
        id: Number(currentUser.id),
      },
      data: {
        firstName: body.firstName,
        lastName: body.lastName,
        phone: body.phone,
        email: body.email,
        password: body.password
          ? hashSync(body.password as string, 10)
          : findUser?.password,
      },
    });
  } catch (error) {
    console.log('Error [UPDATE_USER_INFO] ', error);
    throw error;
  }
}

export async function registerUser(body: Prisma.UserCreateInput) {
  try {
    const user = await prisma.user.findFirst({
      where: {
        email: body.email,
      },
    });

    if (user) {
      if (!user.verified) {
        throw new Error('Почта не подтверждена');
      }

      throw new Error('Пользователь уже существует');
    }

    const createdUser = await prisma.user.create({
      data: {
        firstName: body.firstName,
        lastName: body.lastName,
        phone: body.phone,
        email: body.email,
        password: hashSync(body.password, 10),
      },
    });

    const code = Math.floor(100000 + Math.random() * 900000).toString();

    await prisma.verificationCode.create({
      data: {
        code,
        userId: createdUser.id,
      },
    });

    await sendEmail(
      createdUser.email,
      'Кондитерская "Пралине" - 📝 Подтверждение регистрации',
      VerificationUserTemplate({
        code,
      })
    );
  } catch (err) {
    console.log('Error [CREATE_USER]', err);
    throw err;
  }
}
