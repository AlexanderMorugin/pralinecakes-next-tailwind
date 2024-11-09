'use client';

import { type FC } from 'react';
import { FormInput, FormTextarea, WhiteBlock } from '..';
// import { useFormContext } from 'react-hook-form';

interface Props {
  className?: string;
}

export const CheckoutAddressForm: FC<Props> = ({className}) => {
  // const { control } = useFormContext();

  return (
    <WhiteBlock title='3. Адрес доставки' className={className}>
      <div className='flex flex-col gap-5'>
        <FormInput
          name='address'
          className='text-base'
          placeholder='Адрес доставки...'
        />

        <FormTextarea
          name='comment'
          className='text-base'
          rows={5}
          placeholder='Комментарии к заказу'
        />
      </div>
    </WhiteBlock>
  );
};
