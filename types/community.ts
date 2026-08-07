export type ThemeType = 'kami5' | 'naka7';
export type Theme = { id: string; text: string; type: ThemeType };
export type Community = { id: string; path: string[]; slugs: string[]; name: string; kami5: Theme[]; naka7: Theme[] };
