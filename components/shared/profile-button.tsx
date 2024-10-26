import { UserRound } from 'lucide-react';
import { type FC } from 'react';
import { Button } from '../ui/button';

export const ProfileButton: FC = () => {
  return (
    <>
      <UserRound
        size={26}
        className='flex md:hidden text-white cursor-pointer'
      />
      <Button variant='outline' className='hidden md:flex'>
        <UserRound size={16} />
        Войти
      </Button>
    </>
  );
};
