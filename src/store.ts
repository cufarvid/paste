import { create } from 'zustand';
import type { Theme } from './lib/theme';
import { Language } from './lib/language';

interface Store {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  language: Language;
  setLanguage: (language: Language) => void;
}

export const useStore = create<Store>((set) => ({
  theme: 'latte',
  setTheme: (theme: Theme) => set({ theme }),
  language: 'plaintext',
  setLanguage: (language: Language) => set({ language }),
}));
