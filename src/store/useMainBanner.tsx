import { create } from 'zustand'

interface MainBannerState {
  count: number;
  increment: () => void;
  decrement: () => void;
}

const useStore = create<MainBannerState>((set) => ({
  count: 0,
  increment: () => set((state: MainBannerState) => ({ count: state.count + 1 })),
  decrement: () => set((state: MainBannerState) => ({ count: state.count - 1 })),
}));

export default useStore;