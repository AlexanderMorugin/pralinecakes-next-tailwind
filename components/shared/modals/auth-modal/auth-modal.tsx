'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from '@/components/ui/dialog';

import { type FC } from 'react';
import { AuthForm } from './forms';

interface Props {
  open: boolean;
  onClose: () => void;
}

export const AuthModal: FC<Props> = ({ open, onClose }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className='w-full max-w-[450px]'>
        {/** Скрываем в консоли ошибки по поводу Титла и Дескрипшн */}
        <DialogTitle className='hidden' />
        <DialogDescription className='hidden' />

        <AuthForm handleClose={handleClose} />
      </DialogContent>
    </Dialog>
  );
};
