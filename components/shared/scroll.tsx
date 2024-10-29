import { cn } from '@/lib/utils';
import { type FC } from 'react';

interface Props {
  className?: string;
  children: React.ReactNode;
}

export const Scroll: FC<Props> = ({ className, children }) => {
  return <div className={cn('flex gap-5 overflow-hidden', className)}>{children}</div>;
};
