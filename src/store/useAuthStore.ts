import { create } from 'zustand';

interface User {
  id: string;
  name?: string;
  // 필요한 다른 사용자 정보들...
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (id: string, password: string) => Promise<void>;
  logout: () => void;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  login: async (id: string, password: string) => {
    try {
      const response = await fetch(`${API_URL}/member/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // 쿠키를 포함하여 요청
        body: JSON.stringify({ id, password }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(errorData?.message || '로그인에 실패했습니다.');
      }

      const userData = await response.json();
      set({ user: userData, isAuthenticated: true });
    } catch (error) {
      if (error instanceof TypeError && error.message === 'Failed to fetch') {
        throw new Error('서버에 연결할 수 없습니다. 서버가 실행 중인지 확인해주세요.');
      }
      console.error('Login error:', error);
      throw error;
    }
  },
  logout: () => {
    set({ user: null, isAuthenticated: false });
  },
})); 