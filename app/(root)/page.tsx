import { Container, ProductList } from '@/components/shared';
import { findProducts } from '@/lib/find-products';

export default async function Home() {
  const categories = await findProducts();

  return (
    <>
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
