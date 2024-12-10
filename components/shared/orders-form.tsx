/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode, type FC } from 'react';

import { OrderCard } from './order-card';

export interface OrderProps {
  token: string;
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  phone: string;
  items: any
  createdAt: ReactNode | string | Date;
  totalAmount: number;
  comments: string | null;
  status: string;
  map?: any
}

export const OrdersForm: FC<OrderProps> = ({
  token,
  firstName,
  lastName,
  email,
  address,
  phone,
  items,
  createdAt,
  totalAmount,
  comments,
  status,
}) => {
  console.log(createdAt);

  return (
    token && (
      <OrderCard title={firstName + ' ' + lastName} 
      // endAdornment={createdAt}
      >
        <div>Телефон: {phone}</div>
        <div>E-mail: {email}</div>
        <div>Адрес доставки: {address}</div>
        <div>Токен пользователя: {token}</div>

        <div className='py-4'>
          <div className='font-bold'>Детали заказа:</div>
          {items?.map((item: any) => (
            <div key={item.id} className='flex items-center gap-2'>
              <img
                src={item.product.imageUrl}
                className='w-[52px] h-[52px] rounded-full object-cover'
                alt={item.product.name}
              />

              <div>{item.product.name}</div>
              <div className='flex'>
                <span>{item.quantity}шт *&nbsp;</span>
                <b>{item.product.price}</b> руб
              </div>
            </div>
          ))}
        </div>
        <div>Сумма: {totalAmount} руб</div>
        <div>Комментарии: {comments}</div>
        <div>Статус заказа: {status}</div>
      </OrderCard>
    )
  );
};
