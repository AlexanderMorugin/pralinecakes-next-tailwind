import { PropsWithChildren, type FC } from 'react';
import { Title } from './title';
import { cn } from '@/lib/utils';

interface Props {
  title: string;
  date: string;
  className?: string;
}

export const OrderCard: FC<PropsWithChildren<Props>> = ({
  title,
  date,
  className,
  children,
}) => {
  return (
    <div
      className={cn(
        'bg-white rounded-3xl overflow-hidden border border-[#8486ec]',
        className
      )}
    >
      {title && (
        <div className='flex items-center justify-between p-2 px-5 bg-[#cecef3]'>
          <Title text={title} size='sm' className='font-bold' />
          <span className='text-[12px]'>{date}</span>
        </div>
      )}

      <div className='flex flex-col gap-3 py-2 px-2 md:py-4 md:px-5'>{children}</div>
    </div>
  );
};
