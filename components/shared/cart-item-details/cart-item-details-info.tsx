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
      className={cn('flex flex-col justify-between', className)}
    >
      <h2 className='text-base font-bold flex-1 leading-6 md:text-lg'>{name}</h2>
      {details && <p className='line-clamp-2 text-xs text-gray-400 w-[90%]'>{details}</p>}
    </div>
  );
};