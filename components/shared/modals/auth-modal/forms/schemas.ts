import { z } from 'zod';

const passwordShema = z
  .string()
  .min(3, { message: 'Пароль не должен быть менее 3 символов' });

export const formLoginShema = z.object({
  email: z.string().email({ message: 'Введите корректную почту' }),
  password: passwordShema,
});

export const formRegisterSchema = formLoginShema
  .merge(
    z.object({
      fullName: z.string().min(2, { message: 'Введите Имя и Фамилию' }),
      confirmPassword: passwordShema,
    })
  )
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Пароли не совпадают',
    path: ['confirmPassword'],
  });

  export type TFormLoginValues = z.infer<typeof formLoginShema>
  export type TFormRegisterValues = z.infer<typeof formRegisterSchema>