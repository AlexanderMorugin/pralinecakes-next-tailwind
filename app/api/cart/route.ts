import { prisma } from '@/prisma/prisma-client';
import { NextRequest, NextResponse } from 'next/server';
// import crypto from 'crypto';
// import { findOrCreateCart } from '@/lib/find-or-create-cart';
// import { CreateCartItemValues } from '@/services/dto/cart.dto';
// import { updateCartTotalAmount } from '@/lib/update-cart-total-amount';

export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get('cartToken')?.value;

    if (!token) {
      return NextResponse.json({ totalAmount: 0, items: [] });
    }

    const userCart = await prisma.cart.findFirst({
      where: {
        OR: [{ token }],
      },
      include: {
        cartItems: {
          orderBy: {
            createdAt: 'desc',
          },
          include: {
            product: true,
          },
        },
      },
    });

    return NextResponse.json(userCart);
  } catch (error) {
    console.log('[CART_GET] Server error', error);
    return NextResponse.json(
      { message: 'Не удалось получить корзину' },
      { status: 500 }
    );
  }
}

// export async function POST(req: NextRequest) {
//   try {
//     let token = req.cookies.get('cartToken')?.value;

//     if (!token) {
//       token = crypto.randomUUID();
//     }

//     const userCart = await findOrCreateCart(token);

    // console.log('Так выглядит userCart: ', userCart);

    // const data = (await req.json());
    // console.log('Так выглядит data: ', data);

    // const findCartItem = await prisma.cartItem.findFirst({
    //   where: {
    //     cartId: userCart.id,
    //     productId: data.productId,
    //   },
    // });

    // Если товар был найден то делаем + 1
    // if (findCartItem) {
    //   await prisma.cartItem.update({
    //     where: {
    //       id: findCartItem.id,
    //     },
    //     data: {
    //       quantity: findCartItem.quantity + 1,
    //     },
    //   });
    // } else {
    //   // Если товар не найден
    //   await prisma.cartItem.create({
    //     data: {
    //       cartId: userCart.id,
    //       productId: data.productId,
    //       // quantity: 1,
    //       // ingredients: {
    //       //   connect: data.ingredients?.map((id) => ({
    //       //     id,
    //       //   })),
    //       // },
    //     },
    //   });
    // }

    // const updatedUserCart = await updateCartTotalAmount(token);

    // const response = NextResponse.json(updatedUserCart);
    // response.cookies.set('cartToken', token);
    // return response;
  // } catch (error) {
  //   console.log('[CART_POST] Server error', error);
  //   return NextResponse.json(
  //     { message: 'Не удалось создать корзину' },
  //     { status: 500 }
  //   );
  // }
// }
