import { cn } from '@/lib/utils';
import { type FC } from 'react';

interface Props {
  name: string;
  details?: string;
  className?: string;
}

export const CartItemDetailsInfo: FC<Props> = ({ name, details, className }) => {
  return (
    <div
      className={cn('flex flex-col', className)}
    >
      <h2 className='text-[14px] font-bold md:text-[16px]'>{name}</h2>
      {details && <p className='line-clamp-1 text-[12px] text-gray-400 w-[90%]'>{details}</p>}
    </div>
  );
};
