import { Api } from '@/services/api-client';
import { UserRole } from '@prisma/client';
import { create } from 'zustand';

type TUser = {
  id: number;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  role: UserRole;
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
    id: 0,
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    role: UserRole.USER,
  },

  getUser: async () => {
    try {
      set({ loading: true, error: false });
      const data = (await Api.auth.getMe()) as TUser;

      set({
        user: {
          id: data.id,
          firstName: data.firstName,
          lastName: data.lastName,
          phone: data.phone,
          email: data.email,
          role: data.role,
        },
      });
    } catch (error) {
      console.error(error);
    } finally {
      set({ loading: false });
    }
  },
}));
