import { create } from 'zustand';
import { Cat } from '../interfaces';

interface CatStoreState {
  cats: Cat[];
  populateCats: (cats: Cat[]) => void;
}

export const useCatStore = create<CatStoreState>((set) => ({
  cats: [],
  populateCats: (cats) => set(() => ({ cats: cats })),
}));
