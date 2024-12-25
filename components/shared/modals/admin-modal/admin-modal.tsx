/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from '@/components/ui/dialog';
import { type FC } from 'react';
import { AdminForm } from './admin-form';
import { UserRole } from '@prisma/client';

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
  // console.log('session  ----', adminSession);

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className='w-full max-w-[450px]'>
        {/** Скрываем в консоли ошибки по поводу Титла и Дескрипшн */}
        <DialogTitle className='hidden' />
        <DialogDescription className='hidden' />

        <AdminForm
          // handleClose={handleClose}
          adminSession={adminSession}
          userSession={userSession}
        />
      </DialogContent>
    </Dialog>
  );
};
