import { type FC } from 'react';

import { cn } from '@/lib/utils';

import { CheckoutFormValues } from './checkout-form-schema';
import { CheckoutSendCart, CheckoutSendPersonalForm } from '.';

interface Props {
  data: CheckoutFormValues;
  className?: string;
}

export const СheckoutSendForm: FC<Props> = ({ data, className }) => {
  return (
    <div className={cn('flex flex-col bg-white rounded-xl p-4', className)}>
      <div className='flex flex-col items-center pb-4'>
        <span className='text-lg font-bold'>Благодарим за покупку!</span>
        <span className='text-center'>
          Менеджер свяжется с вами по указанному телефону.
        </span>
      </div>
      <CheckoutSendCart />
      <CheckoutSendPersonalForm data={data} />
    </div>
  );
};
