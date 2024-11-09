import { type FC } from 'react';
import { CheckoutFormValues } from './checkout-form-schema';
import { CheckoutSendCart, CheckoutSendPersonalForm } from '.';

interface Props {
  data: CheckoutFormValues;
}

export const СheckoutSendForm: FC<Props> = ({ data }) => {
  return (
    <>
      <CheckoutSendCart />
      <CheckoutSendPersonalForm data={data} />
    </>
  );
};
