import { type FC } from 'react';

import { Categories, Container, 
  // SortPopup
 } from '.';

export const TopBar: FC = () => {
  return (
    <Container className='sticky top-0 flex items-center bg-white py-2 z-20 shadow-md shadow-white'>

        <Categories />

      {/* <SortPopup /> */}
    </Container>
  );
};
