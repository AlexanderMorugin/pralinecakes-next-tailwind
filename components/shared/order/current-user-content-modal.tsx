/* eslint-disable @typescript-eslint/no-explicit-any */
import { type FC } from 'react';

interface Props {
  item: any;
}

export const CurrentUserContentModal: FC<Props> = ({ item }) => {
  const d = new Date(item.createdAt);
  const date = d.toLocaleString().slice(0, 17);

  return (
    <div className='flex flex-col text-[14px] px-3 pb-4'>
      <span className='pb-2'>
        Заказ № <b>{item.id}</b> от {date}
      </span>
      <span className='font-bold'>{item.firstName + ' ' + item.lastName}</span>
      <span>телефон: {item.phone}</span>
      <span>почта: {item.email}</span>
      <span>адрес: {item.address}</span>
      {item.comments && (
        <span className='pt-2'>комментарий: {item.comments}</span>
      )}
    </div>
  );
};
