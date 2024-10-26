import { ArrowUpDown } from 'lucide-react';
import { type FC } from 'react';

export const SortPopup: FC = () => {
  return (
    <div className='inline-flex items-center gap-1 bg-gray-50 px-5 min-h-[60px] rounded-2xl cursor-pointer'>
      <ArrowUpDown size={16} />
      <b>Сортировка:</b>
      <b className='text-primary'>по рейтингу</b>
    </div>
  );
};
