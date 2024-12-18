// 'use client';

import { Button } from '@/components/ui';
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
// import { useOrderStore } from '@/store/order';
// import { prisma } from '@/prisma/prisma-client';
import { ArrowRight } from 'lucide-react';
import { FC } from 'react';

interface Props {
  firstName: string;
  lastName: string;
  userEmail: string;
}

export const CurrentUserOrders: FC<Props> = ({
  firstName,
  lastName,
  userEmail,
}) => {
  // const { order } = useOrderStore((state) => state);
  // const filterOrders = order.filter(item => item.email === userEmail);

  // // console.log(order);
  // // console.log(filterOrders);
  // console.log(userEmail);

  return (
    <Sheet>
      <SheetTrigger asChild>
        {/** Кнопка */}
        <div className='flex items-center gap-2 border border-white rounded-full py-2 px-2 text-teal-800 group cursor-pointer transition duration-300 sm:rounded-sm sm:py-1 sm:px-4 hover:bg-white'>
          <span className='hidden sm:block transition duration-300 group-hover:text-red-600'>
            все заказы
          </span>
          <ArrowRight
            size={16}
            className='transition duration-300 group-hover:text-red-600'
          />
        </div>
      </SheetTrigger>
      <SheetContent className='flex flex-col justify-between gap-0 pb-0 bg-[#f4f1ee]'>
        <SheetHeader>
          <SheetTitle>{firstName + ' ' + lastName}</SheetTitle>
          <SheetDescription>Все заказы</SheetDescription>
        </SheetHeader>
        <div className='flex-1'>
          <span>{userEmail}</span>
          {/* <span>{firstName + lastName}</span> */}
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type='submit'>Закрыть</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
