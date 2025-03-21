import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

interface AuthState {
  token: string | null;
  user: any | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const useAuth = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      user: null,
      login: async (email: string, password: string) => {
        try {
          const response = await axios.post(`${import.meta.env.VITE_API_URL}/auth/login`, {
            email,
            password,
          });
          
          const { token } = response.data;
          const user = jwtDecode(token);
          
          set({ token, user });
        } catch (error) {
          throw new Error('Invalid credentials');
        }
      },
      logout: () => {
        set({ token: null, user: null });
      },
    }),
    {
      name: 'auth-storage',
    }
  )
);