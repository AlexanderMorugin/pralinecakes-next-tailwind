import { type FC } from 'react';

import { Container, Logo } from '.';

export const Footer: FC = () => {
  return (
    <footer className='min-h-20 bg-[#222224]'>
      <Container className='flex items-center justify-between py-3'>
        {/** Левая часть */}
        <Logo className='flex' />
      </Container>
    </footer>
  );
};
