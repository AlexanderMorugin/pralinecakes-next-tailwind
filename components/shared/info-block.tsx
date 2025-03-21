import { type FC } from 'react';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

import { cn } from '@/lib/utils';

import { Button } from '../ui/button';
import { Title } from './title';

interface Props {
  title: string;
  text: string;
  className?: string;
}

export const InfoBlock: FC<Props> = ({ className, title, text }) => {
  return (
    <div
      className={cn(
        className,
        'flex items-center justify-center w-full gap-12'
      )}
    >
      <div className='flex flex-col'>
        <div className='w-max-[450px]'>
          <Title size='lg' text={title} className='font-extrabold' />
          <p className='text-gray-400 text-lg'>{text}</p>
        </div>

        <div className='flex gap-5 mt-11'>
          <Link href='/'>
            <Button variant='outline' className='gap-2'>
              <ArrowLeft />
              На главную
            </Button>
          </Link>
          <a href=''>
            <Button
              variant='outline'
              className='text-gray-500 border-gray-400 hover:bg-gray-50'
            >
              Обновить
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};
