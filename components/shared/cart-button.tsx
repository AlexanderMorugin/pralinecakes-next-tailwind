'use client';

import { ArrowRight, LoaderCircle, ShoppingCart } from 'lucide-react';
import { type FC } from 'react';

import { CartDrawer } from '.';
import { cn } from '@/lib/utils';
import { useCartStore } from '@/store';

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
            'hidden md:inline-flex group relative bg-white/50 items-center justify-center rounded-md h-10 px-4 py-2 border border-input transition duration-300 hover:bg-primary',
            { 'w-[120px]': cartItems.length === 0 },
            className
          )}
        >
          {cartItems.length > 0 && (
            <>
              <span className='font-bold transition duration-300 group-hover:text-white'>
                {totalAmount} р
              </span>
              <span className='h-full w-[1px] bg-black/30 mx-3' />
            </>
          )}

          <div className='flex items-center gap-2 transition duration-300 group-hover:opacity-0'>
            {loading ? (
              <LoaderCircle size={18} className='animate-spin' />
            ) : (
              <ShoppingCart size={18} strokeWidth={2} />
            )}
            {cartItems.length > 0 && <b>{cartItems.length}</b>}
          </div>
          <ArrowRight
            size={20}
            className='absolute right-5 text-black transition duration-500 -translate-x-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-white'
          />
        </div>
      </CartDrawer>
    </>
  );
};
