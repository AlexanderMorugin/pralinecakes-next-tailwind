import { type FC } from 'react';

import { OrderAccordeon } from './order-accordeon';

interface Props {
  name: string;
  phone: string;
  email: string;
  address: string;
}

export const OrderContact: FC<Props> = ({ name, phone, email, address }) => {
  return (
    <OrderAccordeon
      title='Контакты'
      className='grid grid-cols-[120px_1fr] gap-y-2 py-2 px-2 text-[14px] md:px-3 md:grid-cols-[150px_1fr]'
    >
      <span className='text-gray-500'>Заказчик:</span>
      <span className='text-black'>{name}</span>
      <span className='text-gray-500'>Телефон:</span>
      <span className='text-black'>{phone}</span>
      <span className='text-gray-500'>E-mail:</span>
      <span className='text-black'>{email}</span>
      <span className='text-gray-500'>Адрес доставки:</span>
      <span className='text-black'>{address}</span>
    </OrderAccordeon>
  );
};
