import { User } from '@prisma/client';
import { axiosInstance } from './axios-instance';

export const getMe = async () => {
  const { data } = await axiosInstance.get<User>('/auth/me');

  // if (!data) {
  //   return null;
  // }

  return data;
  // return (await axiosInstance.get<User>('/auth/me')).data;
};
