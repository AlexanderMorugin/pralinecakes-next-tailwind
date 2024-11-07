import { X } from 'lucide-react';
import { type FC } from 'react';

interface Props {
  onClick?: VoidFunction;
}

export const ClearButton: FC<Props> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className='absolute right-4 top-1/3 opacity-30 hover:opacity-100'
    >
      <X className='h-5 w-5' />
    </button>
  );
};
