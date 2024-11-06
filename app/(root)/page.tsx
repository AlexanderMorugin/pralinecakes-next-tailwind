import { Container, ProductList, Title, 
  // TopBar
 } from '@/components/shared';
import { findProducts } from '@/lib/find-products';
import { Suspense } from 'react';

export default async function Home() {
  const categories = await findProducts();

  return (
    <>
      <Container className='mt-5'>
        <Title text='Торты' size='xl' className='font-bold' />
      </Container>
      {/* <TopBar /> */}
      <Container className='flex flex-col gap-8 mt-10 mb-5'>
        <ul>
          <Suspense>
            {categories.map(
              (category) =>
                category.products.length > 0 && (
                  <ProductList
                    key={category.id}
                    title={category.name}
                    products={category.products}
                    categoryId={category.id}
                  />
                )
            )}
          </Suspense>
        </ul>
      </Container>
    </>
  );
}
