import { create } from 'zustand';
import { Theme } from './lib/theme.ts';
import { Language } from './lib/language.ts';

interface Store {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  language: Language;
  setLanguage: (language: Language) => void;
}

export const useStore = create<Store>((set) => ({
  theme: 'light',
  setTheme: (theme: Theme) => set({ theme }),
  language: 'plaintext',
  setLanguage: (language: Language) => set({ language }),
}));
