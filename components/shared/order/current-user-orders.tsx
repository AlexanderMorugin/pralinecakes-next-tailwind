import { FC } from 'react';
import { ArrowRight } from 'lucide-react';

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
import { useOrderStore } from '@/store/order';

import { Title } from '../title';
import { CurrentOrder } from './current-order';

interface Props {
  userId: number;
  firstName: string;
  lastName: string;
  userEmail: string;
  userPhone: string;
}

export const CurrentUserOrders: FC<Props> = ({
  userId,
  firstName,
  lastName,
  userEmail,
  userPhone,
}) => {
  const { order } = useOrderStore((state) => state);

  const filterOrder = order
    .filter((item) => item.userId === userId)
    .map((item) => item);

  const initialValue = 0;

  const totalAmountCurrentUserOrders = filterOrder.reduce(
    (acc, currentItem) => acc + currentItem.totalAmount,
    initialValue
  );

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
          {/** Скрываем ошибку в консоли по поводу Дескрипшн */}
          <SheetDescription className='hidden' />
        </SheetHeader>
        <div className='flex-1'>
          <div className='flex flex-col'>
            <span>телефон: {userPhone}</span>
            <span>почта: {userEmail}</span>
          </div>
          <div className='flex flex-col gap-3 h-full bg-white -mx-6 mt-2 pt-6 px-1'>
            <Title text='Все заказы пользователя' className='px-5' />
            <ul className='flex flex-col gap-3'>
              {filterOrder.map((item) => (
                <CurrentOrder key={item.id} item={item} />
              ))}
            </ul>
          </div>
        </div>

        <SheetFooter className='flex flex-col -mx-6 bg-[#f4f1ee] px-4 py-4 sm:flex-col'>
          <div className='flex justify-between pb-3'>
            <span>Всего на сумму:</span>
            <span>{totalAmountCurrentUserOrders} руб</span>
          </div>
          <SheetClose asChild>
            <Button type='submit'>Закрыть</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
