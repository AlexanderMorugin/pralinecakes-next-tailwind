import { type FC } from 'react';

import { X } from 'lucide-react';

interface Props {
  onClick?: VoidFunction;
}

export const ClearButton: FC<Props> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className='absolute right-4 top-1/4 opacity-30 hover:opacity-100'
    >
      <X className='h-5 w-5' />
    </button>
  );
};
