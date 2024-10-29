import { cn } from '@/lib/utils';
import { type FC } from 'react';

interface Props {
  name: string;
  details: string;
  className?: string;
}

export const CartItemInfo: FC<Props> = ({ name, details, className }) => {
  return (
    <div
      className={cn('flex flex-col justify-between', className)}
    >
      <h2 className='text-lg font-bold flex-1 leading-6'>{name}</h2>
      {details && <p className='text-xs text-gray-400 w-[90%]'>{details}</p>}
    </div>
  );
};
