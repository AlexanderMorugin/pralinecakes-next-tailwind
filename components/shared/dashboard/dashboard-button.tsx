import { type FC } from 'react';
import { LayoutDashboard } from 'lucide-react';

import { Button } from '@/components/ui';

interface Props {
  handleClickSignIn?: () => void;
}

export const DashboardButton: FC<Props> = ({ handleClickSignIn }) => {
  return (
    <>
      <LayoutDashboard
        size={26}
        className='text-white md:hidden'
        onClick={handleClickSignIn}
      />

      <Button
        variant='outline'
        className='hidden md:flex items-center gap-2 w-[130px] group'
        onClick={handleClickSignIn}
      >
        <span className='flex items-center gap-1 text-[#cd9575] tracking-wide transition duration-300 group-hover:text-white'>
          Сотрудник
        </span>
      </Button>
    </>
  );
};
