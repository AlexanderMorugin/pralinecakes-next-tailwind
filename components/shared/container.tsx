import { cn } from '@/lib/utils';
import { PropsWithChildren, type FC } from 'react';

interface Props {
  className?: string;
}
export const Container: FC<PropsWithChildren<Props>> = ({
  children,
  className,
}) => {
  return (
    <div className={cn('mx-auto max-w-[1400px] px-1 md:px-3', className)}>
      {children}
    </div>
  );
};
