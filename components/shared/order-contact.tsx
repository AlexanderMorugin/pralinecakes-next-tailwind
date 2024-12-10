import { type FC } from 'react';
import { OrderAccordeon } from './order-accordeon';

interface Props {
  phone: string;
  email: string;
  address: string;
}

export const OrderContact: FC<Props> = ({ phone, email, address }) => {
  // const [active, setActive] = useState(false);

  // const toggleClick = () => {
  //   setActive(!active);
  // };

  return (
    <OrderAccordeon
      title='Контакты'
      className='grid grid-cols-[120px_1fr] py-2 px-2 text-[14px] md:px-3 md:grid-cols-[150px_1fr]'
    >
      <span className='text-gray-500'>Телефон:</span>
      <span className='text-black'>{phone}</span>
      <span className='text-gray-500'>E-mail:</span>
      <span className='text-black'>{email}</span>
      <span className='text-gray-500'>Адрес доставки:</span>
      <span className='text-black'>{address}</span>
    </OrderAccordeon>
  );
};
