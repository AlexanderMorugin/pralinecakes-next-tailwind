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

import { AdminForm } from './admin-form';

interface Props {
  open: boolean;
  onClose: () => void;
  session: any;
}

export const AdminModal: FC<Props> = ({ open, onClose, session }) => {
  const handleClose = () => {
    onClose();
  };

  const adminSession = session?.user.role === UserRole.ADMIN;
  const userSession = session?.user.role === UserRole.USER;

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className='w-full max-w-[450px]'>
        {/** Скрываем в консоли ошибки по поводу Титла и Дескрипшн */}
        <DialogTitle className='hidden' />
        <DialogDescription className='hidden' />

        <AdminForm adminSession={adminSession} userSession={userSession} />
      </DialogContent>
    </Dialog>
  );
};
