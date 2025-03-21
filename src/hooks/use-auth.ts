import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

interface User {
  id: string;
  email: string;
  role: string;
}

interface AuthState {
  token: string | null;
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isAdmin: () => boolean;
}

export const useAuth = create<AuthState>()(
  persist(
    (set, get) => ({
      token: null,
      user: null,
      login: async (email: string, password: string) => {
        try {
          const response = await axios.post(`${import.meta.env.VITE_API_URL}/auth/login`, {
            email,
            password,
          });

          const { token } = response.data;
          const decodedToken = jwtDecode<User>(token);

          if (decodedToken.role !== 'admin') {
            throw new Error('Unauthorized: Admin access only');
          }

          set({ token, user: decodedToken });
        } catch (error) {
          throw error;
        }
      },
      logout: () => {
        set({ token: null, user: null });
      },
      isAdmin: () => {
        const state = get();
        return state.user?.role === 'admin';
      },
    }),
    {
      name: 'auth-storage',
    }
  )
);