import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type UserRole = 'buyer' | 'seller' | 'admin';

interface UserState {
  user: {
    id: string;
    name: string;
    email: string;
    avatar: string;
    role: UserRole;
  } | null;
  currentRole: UserRole;
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
  setRole: (role: UserRole) => void;
  setUser: (user: UserState['user']) => void;
  logout: () => void;
}

export const useStore = create<UserState>()(
  persist(
    (set) => ({
      user: {
        id: '1',
        name: 'Elite Engineer',
        email: 'engineer@pinnacle.hub',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100',
        role: 'buyer'
      },
      currentRole: 'buyer',
      theme: 'dark',
      setTheme: (theme) => {
        set({ theme });
        if (theme === 'dark') {
          document.documentElement.classList.add('dark');
          document.documentElement.classList.remove('light');
        } else {
          document.documentElement.classList.add('light');
          document.documentElement.classList.remove('dark');
        }
      },
      setRole: (role) => set({ currentRole: role }),
      setUser: (user) => set({ user }),
      logout: () => set({ user: null, currentRole: 'buyer' }),
    }),
    {
      name: 'pinnacle-hub-storage',
    }
  )
);
