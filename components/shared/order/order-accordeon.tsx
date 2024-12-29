'use client';

import { ReactNode, useState, type FC } from 'react';
import { ChevronDown } from 'lucide-react';

import { cn } from '@/lib/utils';

interface Props {
  title: string;
  children: ReactNode;
  className?: string;
}

export const OrderAccordeon: FC<Props> = ({ title, children, className }) => {
  const [active, setActive] = useState(false);

  const toggleClick = () => {
    setActive(!active);
  };
  return (
    <div
      className={cn(
        'flex flex-col h-[40px] rounded-xl overflow-hidden border border-[#cecef3] cursor-pointer',
        { 'h-auto': active }
      )}
    >
      <div
        onClick={toggleClick}
        className='flex items-center gap-3 bg-gray-100 py-2 px-2 transition-all duration-300 ease-in-out md:px-3 hover:bg-lime-50'
      >
        <p className='font-bold'>{title}</p>
        <ChevronDown
          width={20}
          height={20}
          className={cn(
            'transform origin-center rotate-0 transition duration-500 ease-out',
            {
              'transform origin-center rotate-180 transition duration-500 ease-out':
                active,
            }
          )}
        />
      </div>
      <div className={className}>{children}</div>
    </div>
  );
};
