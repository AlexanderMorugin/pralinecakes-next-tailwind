import { z } from 'zod';

const passwordShema = z
  .string()
  .min(3, { message: 'Пароль не должен быть менее 3 символов' });

export const formLoginShema = z.object({
  email: z
    .string()
    .toLowerCase()
    .email({ message: 'Введите корректную почту' }),
  password: passwordShema,
});

export const formRegisterSchema = formLoginShema
  .merge(
    z.object({
      firstName: z
        .string()
        .min(2, { message: 'Имя должно быть не менее 2 символов' })
        .max(20, { message: 'Имя должно быть не более 20 символов' }),
      lastName: z
        .string()
        .min(2, { message: 'Фамилия должна быть не менее 2 символов' })
        .max(20, { message: 'Фамилия должна быть не более 20 символов' }),
      phone: z.string().min(7, { message: 'Введите номер телефона' }),
      confirmPassword: passwordShema,
    })
  )
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Пароли не совпадают',
    path: ['confirmPassword'],
  });

export type TFormLoginValues = z.infer<typeof formLoginShema>;
export type TFormRegisterValues = z.infer<typeof formRegisterSchema>;
