'use client';

import { cn } from '@/lib/utils';
import { Api } from '@/services/api-client';
import { Product } from '@prisma/client';
import { Search } from 'lucide-react';
import Link from 'next/link';
import { useRef, useState, type FC } from 'react';
import { useClickAway, useDebounce } from 'react-use';

interface Props {
  isMobile?: boolean;
  className?: string;
}

export const SearchBar: FC<Props> = ({ isMobile = false, className }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [focused, setFocused] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const ref = useRef(null);

  useClickAway(ref, () => {
    setFocused(false);
  });

  useDebounce(
    () => {
      Api.products
        .searchProduct(searchQuery)
        .then((items) => setProducts(items));
    },
    100,
    [searchQuery]
  );

  const onClickItem = () => {
    setFocused(false);
    setSearchQuery('');
    setProducts([]);
  };

  return (
    <>
      {/** Затемнение экрана */}
      {focused && (
        <div className={cn('fixed top-0 right-0 bottom-0 left-0 bg-black/80 z-30',
          {'bg-black/0': isMobile}
        )} />
      )}

      {/** Поисковый блок */}
      <div
        ref={ref}
        className={cn(
          'flex-1 mx-10 rounded-2xl justify-between h-11 relative z-30',
          {
            'flex-1 -mx-2 rounded-2xl justify-between h-11 relative z-30':
              isMobile,
          },
          className
        )}
      >
        <Search className='absolute top-1/2 translate-y-[-50%] left-3 h-5 text-gray-400' />
        <input
          type='text'
          placeholder='Найти торт...'
          className={cn('rounded-2xl outline-none w-full bg-gray-100 pl-11', {
            'rounded-2xl outline-none w-full bg-gray-100 h-11 pl-11':
              isMobile,
          })}
          onFocus={() => setFocused(true)}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        {/** Всплывающее окно поиска */}
        {products.length > 0 && (
          <div
            className={cn(
              'absolute w-full bg-white rounded-xl top-14 shadow-md transition-all duration-300 invisible opacity-0 z-30',
              focused && 'visible opacity-100 top-12'
            )}
          >
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/product/${product.id}`}
                className='flex items-center gap-3 px-3 py-2 transition duration-200 hover:bg-gray-500/10'
                onClick={onClickItem}
              >
                <img
                  className='rounded-sm h-10 w-10'
                  src={product.imageUrl}
                  alt={product.name}
                />
                <span>{product.name}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
