import { Container, ProductList, Title, TopBar } from '@/components/shared';
import { findProducts } from '@/lib/find-products';

export default async function Home() {
  const categories = await findProducts();

  return (
    <>
      <Container className='mt-5'>
        <Title text='Торты' size='xl' className='font-bold' />
      </Container>
      <TopBar />
      <Container className='mb-5'>
        <ul>
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
        </ul>
      </Container>
    </>
  );
}
