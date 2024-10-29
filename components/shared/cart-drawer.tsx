'use client';

import {
  PropsWithChildren,
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
// import { CartDrawerItem, Title } from '.';
// import { getCartItemDetails } from '@/lib';
// import { ProductSize, ProductType } from '@/constants/constants';
// import ImageLogo from '@/public/logo-120.png';
// import Image from 'next/image';
// import { useCart } from '@/hooks';

export const CartDrawer: FC<PropsWithChildren> = ({ children }) => {
  // const handleClickCountButton = (
  //   id: number,
  //   quantity: number,
  //   type: 'plus' | 'minus'
  // ) => {
  //   const newQuantity = type === 'plus' ? quantity + 1 : quantity - 1;
  //   updateItemQuantity(id, newQuantity);
  // };

  return (
    <Sheet>
      <SheetTrigger>{children}</SheetTrigger>
      <SheetContent className='flex flex-col justify-between pb-0 bg-[#f4f1ee]'>
        <SheetHeader>
          <SheetTitle>
            В корзине
            <span className='font-bold'>3 товара</span>
          </SheetTitle>

          {/** Скрываем ошибку в консоли по поводу Дескрипшн */}
          <SheetDescription className='hidden' />
        </SheetHeader>

        <ul className='flex flex-col gap-3 -mx-6 mt-5 overflow-auto'>
          <CartDrawerItem
            id={1}
            imageUrl='https://pralinecakes.ru/_next/static/media/pastry-karamelno-orehovoe-s.46d9763e.jpeg'
            name='Пирожное Карамельно-Ореховое'
            description='Одно из самых вкусных пирожных нашей кондитерской! Нежнейшие, сочные, шоколадные коржи бисквита пропитанные медом, с прослойками из мягкого, сливочно-творожного крема и вареного сгущенного молока. На самый нижний бисквит выложен немного соленый, бланшированный арахис, сдобренный густой карамелью.'
            price={550}
            // handleClickCountButton={(type) =>
            //   handleClickCountButton(item.id, item.quantity, type)
            // }
            // onClickRemove={() => removeCartItem(item.id)}
          />
          <CartDrawerItem
            id={2}
            imageUrl='https://pralinecakes.ru/_next/static/media/pastry-karamelno-orehovoe-s.46d9763e.jpeg'
            name='Пирожное Карамельно-Ореховое'
            description='Одно из самых вкусных пирожных нашей кондитерской! Нежнейшие, сочные, шоколадные коржи бисквита пропитанные медом, с прослойками из мягкого, сливочно-творожного крема и вареного сгущенного молока. На самый нижний бисквит выложен немного соленый, бланшированный арахис, сдобренный густой карамелью.'
            price={550}
            // handleClickCountButton={(type) =>
            //   handleClickCountButton(item.id, item.quantity, type)
            // }
            // onClickRemove={() => removeCartItem(item.id)}
          />
          <CartDrawerItem
            id={3}
            imageUrl='https://pralinecakes.ru/_next/static/media/pastry-karamelno-orehovoe-s.46d9763e.jpeg'
            name='Пирожное Карамельно-Ореховое'
            description='Одно из самых вкусных пирожных нашей кондитерской! Нежнейшие, сочные, шоколадные коржи бисквита пропитанные медом, с прослойками из мягкого, сливочно-творожного крема и вареного сгущенного молока. На самый нижний бисквит выложен немного соленый, бланшированный арахис, сдобренный густой карамелью.'
            price={550}
            // handleClickCountButton={(type) =>
            //   handleClickCountButton(item.id, item.quantity, type)
            // }
            // onClickRemove={() => removeCartItem(item.id)}
          />
        </ul>

        <SheetFooter className='-mx-6 bg-white p-8'>
          <div className='w-full'>
            <div className='flex mb-4'>
              <span className='flex flex-1 text-lg text-neutral-500'>
                Итого
                <div className='flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2' />
              </span>
              <span className='font-bold text-lg'>5555 руб</span>
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
