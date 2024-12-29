/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { type FC } from 'react';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from '@/components/ui/dialog';
import { UserRole } from '@prisma/client';

import { AuthForm } from './forms';

interface Props {
  open: boolean;
  onClose: () => void;
  session: any;
}

export const AuthModal: FC<Props> = ({ open, session, onClose }) => {
  const userSession = session?.user.role === UserRole.USER;
  const adminSession = session?.user.role === UserRole.ADMIN;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className='w-full max-w-[450px]'>
        {/** Скрываем в консоли ошибки по поводу Титла и Дескрипшн */}
        <DialogTitle className='hidden' />
        <DialogDescription className='hidden' />

        <AuthForm
          handleClose={handleClose}
          userSession={userSession}
          adminSession={adminSession}
        />
      </DialogContent>
    </Dialog>
  );
};
