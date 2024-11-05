import { Suspense, type FC } from 'react';

import { Categories, Container, SortPopup } from '.';

export const TopBar: FC = () => {
  return (
    <Container className='sticky top-0 flex items-center justify-between bg-white py-5 z-10'>
      <Suspense>
        <Categories />
      </Suspense>
      <SortPopup />
    </Container>
  );
};
