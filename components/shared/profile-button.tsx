import { UserRound } from 'lucide-react';
import { type FC } from 'react';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';

interface Props {
  hasCheckout?: boolean;
}

export const ProfileButton: FC<Props> = ({ hasCheckout }) => {
  return (
    <>
      <UserRound
        size={26}
        className={cn('flex md:hidden text-white cursor-pointer', {
          'text-gray-800': hasCheckout,
        })}
      />
      <Button variant='outline' className='hidden md:flex'>
        <UserRound size={16} />
        Войти
      </Button>
    </>
  );
};
