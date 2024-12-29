import { type FC } from 'react';

import { Skeleton } from '@/components/ui/skeleton';

export const CheckoutCartItemSkeleton: FC = () => {
  return (
    <li className='flex flex-col border-b border-gray-100 pb-3 sm:flex-row'>
      <div className='flex gap-3 flex-1 pb-1'>
        <Skeleton className='w-[60px] h-[60px]' />
        <div className='flex flex-col gap-2'>
          <Skeleton className='w-[150px] h-[20px]' />
          <Skeleton className='w-[150px] h-[28px]' />
        </div>
      </div>

      <div className='flex items-center justify-end gap-2 ml-3'>
        <Skeleton className='w-[80px] h-[24px]' />
      </div>
    </li>
  );
};
