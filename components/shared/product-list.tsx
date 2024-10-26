'use client';

import { useEffect, useRef, type FC } from 'react';
import { useIntersection } from 'react-use';

import { ProductCard, Title } from '.';
import { useCategoryId } from '@/store/category';

export type TProduct = {
  id: number;
  imageUrl: string;
  name: string;
  description: string;
  price: number;
};

interface Props {
  title: string;
  products: TProduct[];
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
  }, [intersection?.isIntersecting]);

  return (
    <div className='flex flex-col gap-2' id={title} ref={intersectionRef}>
      <Title text={title} size='lg' className='font-bold px-6 mt-[100px]' />
      <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            imageUrl={product.imageUrl}
            name={product.name}
            description={product.description}
            price={product.price}
          />
        ))}
      </ul>
    </div>
  );
};
