import { type FC } from 'react';

import { Skeleton } from '@/components/ui/skeleton';

export const ProductCardSkeleton: FC = () => {
  return (
    <div className='flex flex-col border border-solid border-gray-200 rounded-lg overflow-hidden'>
      <Skeleton className='w-full h-[200px] rounded-none' />
      <div className='flex flex-col gap-2 p-4'>
        <Skeleton className='h-[23px] w-full' />
        <Skeleton className='h-[68px] w-full' />
      </div>
      <div className='flex justify-between px-4 pb-2'>
        <Skeleton className='h-[40px] w-[50px]' />
        <Skeleton className='h-[40px] w-[130px]' />
      </div>
    </div>
  );
};
