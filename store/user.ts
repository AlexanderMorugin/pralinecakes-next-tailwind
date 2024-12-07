import { Api } from '@/services/api-client';
import { create } from 'zustand';

type TUser = {
  // fullName: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
};
export interface UserState {
  loading: boolean;
  error: boolean;
  user: TUser;

  getUser: () => Promise<void>;
}

export const useUserStore = create<UserState>((set) => ({
  loading: false,
  error: false,
  user: {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
  },

  getUser: async () => {
    try {
      set({ loading: true, error: false });
      const data = (await Api.auth.getMe()) as TUser;
      // set({ user: { fullName: data.fullName, email: data.email } });
      set({
        user: {
          firstName: data.firstName,
          lastName: data.lastName,
          phone: data.phone,
          email: data.email,
        },
      });
    } catch (error) {
      console.error(error);
    } finally {
      set({ loading: false });
    }
  },
}));
