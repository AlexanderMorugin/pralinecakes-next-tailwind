'use client';

import { cn } from '@/lib/utils';
import { categories } from '@/prisma/categories';
import { useCategoryId } from '@/store/category';
import { type FC } from 'react';
import { ScrollArea, ScrollBar } from '../ui/scroll-area';

interface Props {
  className?: string;
}

export const Categories: FC<Props> = ({ className }) => {
  const categoryActiveId = useCategoryId((state) => state.activeId);

  return (
    <ScrollArea>
      <ul className='flex items-center gap-3'>
        {categories.map((category) => (
          <li
            key={category.id}
            className={cn(
              'text-[#f8f4ff] border-b-2 border-[#a65317]',
              categoryActiveId === category.id &&
                'border-b-2 border-[#ddeeff]',
              className
            )}
          >
            <a href={`/#${category.name}`} className='text-[12px] md:text-[16px]'>{category.name}</a>
          </li>
        ))}
      </ul>
      <ScrollBar orientation='horizontal' />
    </ScrollArea>
  );
};
