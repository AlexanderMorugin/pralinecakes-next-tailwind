import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Search } from 'lucide-react';
import { type FC } from 'react';
import { Button } from '@/components/ui';
import { SearchBar } from './search-bar';

export const SearchMobile: FC = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        {/** Кнопка */}
        <Search
          size={26}
          className='flex md:hidden text-white cursor-pointer'
        />
      </SheetTrigger>

      <SheetContent className='flex flex-col justify-between gap-0 py-0 bg-[#8486ec]'>
        <SheetHeader className='py-4'>
          <SheetTitle className='text-white pt-1'>Что будем искать?</SheetTitle>
          <SheetDescription className='text-white'>
            Введите название торта с большой буквы
          </SheetDescription>
        </SheetHeader>

        <div className='relative flex-1'>
          <SearchBar isMobile={true} />
        </div>

        <SheetFooter className='flex flex-col -mx-6 bg-[#f4f1ee] px-4 py-4 sm:flex-col'>
          <SheetClose asChild>
            <Button type='submit'>Закрыть</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
