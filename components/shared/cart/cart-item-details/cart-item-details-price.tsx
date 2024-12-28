import { cn } from '@/lib/utils';
import { type FC } from 'react';

interface Props {
  value?: number;
  className?: string;
}

export const CartItemDetailsPrice: FC<Props> = ({ value, className }) => {
  return value && <span className={cn('text-[14px]', className)}>{value} р</span>;
};
