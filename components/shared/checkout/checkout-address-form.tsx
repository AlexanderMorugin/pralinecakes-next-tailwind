'use client';

import { type FC } from 'react';

import { FormInput, FormTextarea, WhiteBlock } from '..';

interface Props {
  className?: string;
}

export const CheckoutAddressForm: FC<Props> = ({ className }) => {
  return (
    <WhiteBlock title='Адрес доставки' className={className}>
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
