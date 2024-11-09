import { cn } from '@/lib/utils';
import { type FC } from 'react';

interface Props {
  value?: number;
  className?: string;
}

export const CartItemDetailsPrice: FC<Props> = ({ value, className }) => {
  return value && <h2 className={cn('font-bold', className)}>{value} р</h2>;
};
