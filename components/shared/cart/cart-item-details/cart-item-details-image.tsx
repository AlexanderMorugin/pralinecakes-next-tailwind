import { type FC } from 'react';

import { cn } from '@/lib/utils';

interface Props {
  src?: string;
  className?: string;
}

export const CartItemDetailsImage: FC<Props> = ({ src, className }) => {
  return (
    src && (
      <img
        className={cn('w-[60px] h-[60px] object-cover rounded-full', className)}
        src={src}
      />
    )
  );
};
