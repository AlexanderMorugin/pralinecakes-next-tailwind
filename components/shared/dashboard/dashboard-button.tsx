import { Button } from '@/components/ui';
import { LayoutDashboard } from 'lucide-react';
import Link from 'next/link';
import { type FC } from 'react';

export const DashboardButton: FC = () => {
  return (
    <>
      <Link href='/dashboard'>
        <LayoutDashboard size={26} className='text-white md:hidden' />

        <Button
          variant='outline'
          className='hidden md:flex items-center gap-2 w-[130px] group'
        >
          <span className='flex items-center gap-1 text-[#cd9575] tracking-wide transition duration-300 group-hover:text-white'>
            Сотрудник
          </span>
        </Button>
      </Link>
    </>
  );
};
