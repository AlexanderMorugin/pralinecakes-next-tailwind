'use client';

import { cn } from '@/lib/utils';
import { categories } from '@/prisma/categories';
import { useCategoryId } from '@/store/category';
import { type FC } from 'react';

interface Props {
  className?: string;
}

export const Categories: FC<Props> = ({ className }) => {
  const categoryActiveId = useCategoryId((state) => state.activeId);

  return (
    <ul className='inline-flex bg-gray-50 p-2 rounded-2xl min-h-[60px]'>
      {categories.map((category) => (
        <li
          key={category.id}
          className={cn(
            'flex items-center font-bold h-11 rounded-2xl px-5',
            categoryActiveId === category.id &&
              'bg-white shadow-md shadow-gray-200 text-primary',
            className
          )}
        >
          <a href={`/#${category.name}`}>
            <button>{category.name}</button>
          </a>
        </li>
      ))}
    </ul>
  );
};
