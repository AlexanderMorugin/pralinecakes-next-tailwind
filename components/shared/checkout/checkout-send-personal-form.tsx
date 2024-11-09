import { type FC } from 'react';
import { CheckoutFormValues } from './checkout-form-schema';
import { Title } from '../title';

interface Props {
  data: CheckoutFormValues;
}

export const CheckoutSendPersonalForm: FC<Props> = ({ data }) => {
  const fullName = data.firstName + ' ' + data.lastName;
  return (
    <div className='grid grid-cols-[max-content_1fr] gap-x-4'>
      <span>Покупатель:</span>
      <Title size='sm' text={fullName} className='font-bold' />

      <span>Телефон:</span>
      <span>
        <b>{data.phone}</b>
      </span>

      <span>Адрес доставки:</span>
      <span>
        <b>{data.address}</b>
      </span>

      <span>Комментарии:</span>
      <span>
        <b>{data.comment}</b>
      </span>
    </div>
  );
};
