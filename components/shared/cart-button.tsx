import { ArrowRight, ShoppingCart } from 'lucide-react';
import { type FC } from 'react';
import { Button } from '../ui/button';

export const CartButton: FC = () => {
  return (
    <>
      <ShoppingCart
        size={26}
        className='flex md:hidden text-white cursor-pointer'
      />
      <Button variant='outline' className='hidden md:flex group relative'>
        <span className='font-bold transition duration-300 group-hover:text-primary'>
          1450 р
        </span>
        <span className='h-full w-[1px] bg-black/30 mx-3' />
        <div className='flex items-center gap-2 transition duration-300 group-hover:opacity-0'>
          <ShoppingCart size={16} strokeWidth={2} />
          <b>5</b>
        </div>
        <ArrowRight
          size={20}
          className='absolute right-5 text-black transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-primary'
        />
      </Button>
    </>
  );
};
