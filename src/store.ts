import { create } from 'zustand';
import { DEFAULT_THEME, Theme } from './lib/theme';
import { DEFAULT_LANGUAGE, Language } from './lib/language';

interface Store {
  theme: Theme;
  setTheme: (theme: Theme | null) => void;
  language: Language;
  setLanguage: (language: Language | null) => void;
}

export const useStore = create<Store>((set) => ({
  theme: DEFAULT_THEME,
  setTheme: (theme) => set({ theme: theme ?? DEFAULT_THEME }),
  language: DEFAULT_LANGUAGE,
  setLanguage: (language) => set({ language: language ?? DEFAULT_LANGUAGE }),
}));
