import { cn } from '@/lib/utils';
import { type FC } from 'react';

interface Props {
  src?: string;
  className?: string;
}

export const CartItemDetailsImage: FC<Props> = ({ src, className }) => {
  return (
    src && <img className={cn('w-[60px] h-[60px] object-cover rounded-full', className)} src={src} />
  );
};
