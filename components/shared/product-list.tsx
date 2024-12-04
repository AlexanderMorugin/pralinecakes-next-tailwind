'use client';

import { useEffect, useRef, type FC } from 'react';
import { useIntersection } from 'react-use';

import { ProductCard, 
  // ProductCardSkeleton, 
  Title } from '.';
import { useCategoryId } from '@/store/category';
import { Product } from '@prisma/client';

export type TProduct = {
  product: Product
};

interface Props {
  title: string;
  products: Product[];
  categoryId: number;
}

export const ProductList: FC<Props> = ({ title, products, categoryId }) => {
  const setCategoryId = useCategoryId((state) => state.setActiveId);

  const intersectionRef = useRef(null);
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 1,
  });

  useEffect(() => {
    if (intersection?.isIntersecting) {
      setCategoryId(categoryId);
    }
  }, [intersection?.isIntersecting, categoryId, setCategoryId]);

  return (
    <li className='flex flex-col gap-2' id={title} ref={intersectionRef}>
      <Title text={title} size='lg' className='font-bold px-6 mt-[100px] md:mt-[120px]' />
      <ul className='grid grid-cols-1 gap-2 xs:grid-cols-2 md:grid-cols-3 md:gap-4 lg:grid-cols-4 lg:gap-6'>
        {products.map((product) => (
          // <ProductCardSkeleton key={product.id} />
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </ul>
    </li>
  );
};
