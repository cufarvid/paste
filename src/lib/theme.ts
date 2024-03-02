export const THEMES = ['vs-dark', 'light'] as const;

export type Theme = (typeof THEMES)[number];
