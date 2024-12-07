import { type FC } from 'react';
import toast from 'react-hot-toast';

interface Props {
  title: string;
}

export const ToastSuccess: FC<Props> = ({ title }) => {
  return toast(title, {
    position: 'bottom-left',
    duration: 3000,
    style: {
      backgroundColor: '#28a745',
      color: '#fff',
      padding: '10px',
      borderRadius: '8px',
    },
  });
};
