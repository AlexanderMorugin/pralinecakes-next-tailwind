import { type FC } from 'react';

import { Categories, Container } from '.';

export const TopBar: FC = () => {
  return (
    <Container className='flex items-center'>
      <Categories />
    </Container>
  );
};
