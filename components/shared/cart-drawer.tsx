'use client';

import { PropsWithChildren, useEffect, type FC } from 'react';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import Link from 'next/link';
import { Button } from '../ui';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { CartDrawerItem, Title } from '.';
import { useCartStore } from '@/store';
// import { useCart } from '@/hooks/use-cart';
// import { CartDrawerItem, Title } from '.';
// import { getCartItemDetails } from '@/lib';
// import { ProductSize, ProductType } from '@/constants/constants';
import ImageLogo from '@/assets/images/logo-120.png';
import Image from 'next/image';
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
    const newQuantity = type === 'plus' ? quantity + 1 : quantity - 1;
    updateCartItemQuantity(id, newQuantity);
  };

  return (
    <Sheet>
      <SheetTrigger>{children}</SheetTrigger>
      <SheetContent className='flex flex-col justify-between gap-0 pb-0 bg-[#f4f1ee]'>
        <SheetHeader>
          <SheetTitle className='pb-4'>
            <span>В корзине </span>
            <span>
              <b>{cartItems?.length}</b> товаров
            </span>
          </SheetTitle>

          {/** Скрываем ошибку в консоли по поводу Дескрипшн */}
          <SheetDescription className='hidden' />
        </SheetHeader>

        {totalAmount > 0 && (
          <>
            <ul className='-mx-6 overflow-auto flex-1'>
              {cartItems.map((item) => (
                <CartDrawerItem
                  key={item.id}
                  id={item.id}
                  imageUrl={item.imageUrl}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  quantity={item.quantity}
                  disabled={item.disabled}
                  handleClickCountButton={(type) =>
                    handleClickCountButton(item.id, item.quantity, type)
                  }
                  onClickRemove={() => removeCartItem(item.id)}
                />
              ))}
            </ul>

            <SheetFooter className='-mx-6 bg-white px-8 py-4'>
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
          </>
        )}

        {!totalAmount && (
          <div className='flex flex-col items-center justify-center w-72 mx-auto my-auto'>
            <Image src={ImageLogo} alt='ImageLogo' width={120} height={120} />
            <Title
              size='sm'
              className='text-center font-bold my-2'
              text='Ваша корзина пуста'
            />
            <p className='text-center text-neutral-500 mb-5'>
              Добавьте продукт, чтобы совершить заказ.
            </p>
            <SheetClose>
              <div className='inline-flex items-center justify-center whitespace-nowrap rounded-md w-56 h-12 text-base bg-primary text-primary-foreground hover:bg-primary/90'>
                <ArrowLeft className='w-5 mr-2' />
                Вернуться назад
              </div>
            </SheetClose>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};
