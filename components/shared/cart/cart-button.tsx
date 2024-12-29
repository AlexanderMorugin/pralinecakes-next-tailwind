'use client';

import { type FC } from 'react';
import { ArrowRight, LoaderCircle, ShoppingCart } from 'lucide-react';

import { cn } from '@/lib/utils';
import { useCartStore } from '@/store';

import { CartDrawer } from '.';

interface Props {
  className?: string;
}

export const CartButton: FC<Props> = ({ className }) => {
  const { totalAmount, cartItems, loading } = useCartStore((state) => state);

  return (
    <>
      <CartDrawer>
        <div className='relative flex text-white cursor-pointer md:hidden'>
          <ShoppingCart size={26} />
          {cartItems.length > 0 && (
            <div className='absolute top-[-10px] right-[-10px] flex items-center justify-center w-auto px-2 py-1 rounded-full bg-[#ff0000] text-[10px] text-white font-bold'>
              {cartItems.length}
            </div>
          )}
        </div>

        <div
          className={cn(
            'hidden md:inline-flex group relative bg-transparent items-center justify-center rounded-md h-10 px-4 py-2 border border-input transition duration-300 hover:bg-primary',
            { 'w-[130px]': cartItems.length === 0 },
            className
          )}
        >
          {cartItems.length > 0 && (
            <>
              <span
                className={cn(
                  'font-bold transition duration-500 group-hover:text-white',
                  { 'text-white': cartItems.length > 0 }
                )}
              >
                {totalAmount} р
              </span>
              <span className='h-full w-[1px] bg-white mx-3 transition duration-500 group-hover:bg-white' />
            </>
          )}

          <div className='flex items-center gap-2 transition duration-300'>
            {loading ? (
              <LoaderCircle size={18} className='animate-spin' />
            ) : (
              <ShoppingCart
                size={18}
                strokeWidth={2}
                className={cn(
                  'text-[#cd9575] transition duration-500 group-hover:-translate-x-5 group-hover:text-white',
                  {
                    'text-[#ff0000] group-hover:-translate-x-0':
                      cartItems.length > 0,
                  }
                )}
              />
            )}
            {cartItems.length > 0 && (
              <span
                className={cn(
                  'font-bold text-black transition duration-500 group-hover:text-white',
                  { 'text-white': cartItems.length > 0 }
                )}
              >
                {cartItems.length}
              </span>
            )}
          </div>
          {cartItems.length <= 0 && (
            <ArrowRight
              size={20}
              className='absolute right-5 text-black transition duration-500 -translate-x-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-white'
            />
          )}
        </div>
      </CartDrawer>
    </>
  );
};
