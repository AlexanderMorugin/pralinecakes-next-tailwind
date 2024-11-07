'use client';

import { InputHTMLAttributes, type FC } from 'react';
import { ClearButton, ErrorText, RequiredSymbol } from '..';
import { useFormContext } from 'react-hook-form';
import { Input } from '@/components/ui/input';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  required?: boolean;
  className?: string;
}

export const FormInput: FC<Props> = ({
  name,
  label,
  required,
  className,
  ...props
}) => {
  const {
    register,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext();

  const value = watch(name);
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
        <Input className='h-12 text-md' {...register(name)} {...props} />

        {value && <ClearButton onClick={handleClearInput} />}
      </div>

      {errorText && <ErrorText text={errorText} className='mt-2' />}
    </div>
  );
};
