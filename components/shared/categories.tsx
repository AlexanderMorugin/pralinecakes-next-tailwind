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
      <ul className='flex items-center gap-3 p-2'>
        {categories.map((category) => (
          <li
            key={category.id}
            className={cn(
              'flex items-center font-bold bg-gray-50 rounded-md px-5 py-2',
              categoryActiveId === category.id &&
                'bg-primary  shadow-gray-200 text-white',
              className
            )}
          >
            <a href={`/#${category.name}`}>
              {category.name}
            </a>
          </li>
        ))}
      </ul>
      <ScrollBar orientation='horizontal' />
    </ScrollArea>
  );
};
