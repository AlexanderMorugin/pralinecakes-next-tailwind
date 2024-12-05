import { type FC } from 'react';

import { Categories, Container } from '.';

export const TopBar: FC = () => {
  return (
    <Container className='flex items-center px-2'>
      <Categories />
    </Container>
  );
};
