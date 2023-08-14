import { create } from 'zustand';

interface SearchStoreState {
  text: string;
  update: (newText: string) => void;
  clear: () => void;
}

export const useSearchStore = create<SearchStoreState>((set) => ({
  text: '',
  update: (newText) => set(() => ({ text: newText })),
  clear: () => set(() => ({ text: '' })),
}));
