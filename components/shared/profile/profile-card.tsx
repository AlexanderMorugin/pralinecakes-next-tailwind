import { User } from '@prisma/client';
import React, { FC } from 'react';

interface Props {
  data: User;
}

export const ProfileCard: FC<Props> = ({ data }) => {
  return (
    <div className='flex flex-col w-full max-w-[400px] border border-slate-500 rounded-md p-2'>
      <span>
        <b>{data.firstName + ' ' + data.lastName}</b>
      </span>
      <span>телефон: {data.phone}</span>
      <span>почта: {data.email}</span>
      <span>создан: {data.createdAt.toLocaleDateString()}</span>
    </div>
  );
};
