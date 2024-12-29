import { type FC } from 'react';

import { FormInput, WhiteBlock } from '..';

interface Props {
  className?: string;
}

export const CheckoutPersonalForm: FC<Props> = ({ className }) => {
  return (
    <WhiteBlock title='Персональные данные' className={className}>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-5'>
        <FormInput type='text' name='firstName' label='Имя' />
        <FormInput type='text' name='lastName' label='Фамилия' />
        <FormInput type='text' name='phone' label='Телефон' />
        <FormInput type='email' name='email' label='E-Mail' />
      </div>
    </WhiteBlock>
  );
};
