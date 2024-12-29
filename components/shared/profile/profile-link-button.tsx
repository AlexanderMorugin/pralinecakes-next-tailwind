import { type FC } from 'react';
import Link from 'next/link';

import { Button } from '@/components/ui';

interface Props {
  route: string;
  text: string;
}

export const ProfileLinkButton: FC<Props> = ({ route, text }) => {
  return (
    <Link href={route} className='flex justify-center w-full'>
      <Button className='w-full max-w-[400px] h-14 text-[16px]'>{text}</Button>
    </Link>
  );
};
