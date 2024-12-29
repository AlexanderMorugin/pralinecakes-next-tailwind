import { type FC } from 'react';

import { cn } from '@/lib/utils';

interface Props {
  value?: number;
  className?: string;
}

export const CartItemDetailsPrice: FC<Props> = ({ value, className }) => {
  return (
    value && <span className={cn('text-[14px]', className)}>{value} р</span>
  );
};
