'use client';

import { InputHTMLAttributes, type FC } from 'react';
import { useFormContext } from 'react-hook-form';

import { Textarea } from '@/components/ui/textarea';

import { ClearButton, ErrorText, RequiredSymbol } from '..';

interface Props extends InputHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label?: string;
  required?: boolean;
  rows: number;
  className?: string;
}

export const FormTextarea: FC<Props> = ({
  name,
  label,
  required,
  rows,
  className,
  ...props
}) => {
  const {
    register,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext();

  const text = watch(name);
  const errorText = errors[name]?.message as string;

  const handleClearInput = () => {
    setValue(name, '');
  };

  return (
    <div className={className}>
      {label && (
        <p className='font-medium mb-2'>
          {label} {required && <RequiredSymbol />}
        </p>
      )}

      <div className='relative'>
        <Textarea
          rows={rows}
          className='h-12 text-md'
          {...register(name)}
          {...props}
        />

        {Boolean(text) && <ClearButton onClick={handleClearInput} />}
      </div>

      {errorText && <ErrorText text={errorText} className='mt-2' />}
    </div>
  );
};
