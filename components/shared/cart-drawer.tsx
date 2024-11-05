'use client';

import {
  PropsWithChildren,
  useEffect,
  //  useState,
  type FC,
} from 'react';
import {
  Sheet,
  // SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import Link from 'next/link';
import { Button } from '../ui';
import {
  // ArrowLeft,
  ArrowRight,
} from 'lucide-react';
import { CartDrawerItem } from '.';
import { useCartStore } from '@/store';
// import { useCart } from '@/hooks/use-cart';
// import { CartDrawerItem, Title } from '.';
// import { getCartItemDetails } from '@/lib';
// import { ProductSize, ProductType } from '@/constants/constants';
// import ImageLogo from '@/public/logo-120.png';
// import Image from 'next/image';
// import { useCart } from '@/hooks';

export const CartDrawer: FC<PropsWithChildren> = ({ children }) => {
  // const { totalAmount, cartItems, updateItemQuantity, removeCartItem } = useCart();
  const {
    getCartItems,
    totalAmount,
    cartItems,
    updateCartItemQuantity,
    removeCartItem,
  } = useCartStore((state) => state);

  useEffect(() => {
    getCartItems();
  }, []);

  const handleClickCountButton = (
    id: number,
    quantity: number,
    type: 'plus' | 'minus'
  ) => {
    // console.log(id, quantity, type)
    const newQuantity = type === 'plus' ? quantity + 1 : quantity - 1;
    updateCartItemQuantity(id, newQuantity);
  };

  return (
    <Sheet>
      <SheetTrigger>{children}</SheetTrigger>
      <SheetContent className='flex flex-col justify-between pb-0 bg-[#f4f1ee]'>
        <SheetHeader>
          <SheetTitle>
            <span>В корзине </span>
            <span>
              <b>{cartItems?.length}</b> товаров
            </span>
          </SheetTitle>

          {/** Скрываем ошибку в консоли по поводу Дескрипшн */}
          <SheetDescription className='hidden' />
        </SheetHeader>

        <ul className='-mx-6 mt-5 overflow-auto flex-1'>
          {cartItems.map((item) => (
            <CartDrawerItem
              key={item.id}
              id={item.id}
              imageUrl={item.imageUrl}
              name={item.name}
              description={item.description}
              price={item.price}
              quantity={item.quantity}
              handleClickCountButton={(type) =>
                handleClickCountButton(item.id, item.quantity, type)
              }
              onClickRemove={() => removeCartItem(item.id)}
            />
          ))}
        </ul>

        <SheetFooter className='-mx-6 bg-white p-8'>
          <div className='w-full'>
            <div className='flex mb-4'>
              <span className='flex flex-1 text-lg text-neutral-500'>
                Итого
                <div className='flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2' />
              </span>
              <span className='font-bold text-lg'>{totalAmount} руб</span>
            </div>

            <Link href='/checkout'>
              <Button
                // loading={redirect}
                // onClick={() => setRedirect(true)}
                type='submit'
                className='w-full h-12 text-base'
              >
                Оформить заказ
                <ArrowRight className='w-5 ml-2' />
              </Button>
            </Link>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
