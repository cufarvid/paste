import { loader } from '@monaco-editor/react';
import { editor } from 'monaco-editor';
import IStandaloneThemeData = editor.IStandaloneThemeData;

import { mocha } from './mocha';
import { latte } from './latte';

export type Theme = 'latte' | 'mocha';
type Color = `#${string}`;
type ThemeType = 'dark' | 'light';

interface ThemeControlsConfig {
  surface: Color;
  overlay: Color;
  background: Color;
  text: Color;
  primary: Color;
}

export interface ThemeConfig {
  name: Theme;
  type: ThemeType;
  controls: ThemeControlsConfig;
  editor: IStandaloneThemeData;
}

export const THEME_CONFIGS: Record<Theme, ThemeConfig> = {
  latte,
  mocha,
};

export const THEMES: Theme[] = Object.keys(THEME_CONFIGS) as Theme[];
export const DEFAULT_THEME: Theme = 'latte';

export const defineTheme = (config: ThemeConfig) => {
  loader.init().then((monaco) => {
    monaco.editor.defineTheme(config.name, config.editor);
  });
};
