import { type FC } from 'react';
import { CheckoutFormValues } from './checkout-form-schema';

interface Props {
  data: CheckoutFormValues;
}

export const CheckoutSendPersonalForm: FC<Props> = ({ data }) => {
  const fullName = data.firstName + ' ' + data.lastName;
  return (
    <div className='grid grid-cols-[max-content_1fr] gap-x-4 text-[14px]'>
      <span className='text-[12px]'>Покупатель:</span>
      <span>{fullName}</span>

      <span className='text-[12px]'>Телефон:</span>
      <span>{data.phone}</span>

      <span className='text-[12px]'>Адрес доставки:</span>
      <span>{data.address}</span>

      <span className='text-[12px]'>Комментарии:</span>
      <span>{data.comment}</span>
    </div>
  );
};
