import { User } from '@prisma/client';
import React, { FC } from 'react';

interface Props {
  data: User;
}

export const ProfileCard: FC<Props> = ({ data }) => {
  return (
    <div className='flex flex-col w-full max-w-[400px] border border-slate-500 rounded-md p-2 text-[14px]'>
      <span className='text-[18px] font-bold'>
        {data.firstName + ' ' + data.lastName}
      </span>
      <span>телефон: {data.phone}</span>
      <span>почта: {data.email}</span>
      <span>аккаунт создан: {data.createdAt.toLocaleDateString()}</span>
    </div>
  );
};
