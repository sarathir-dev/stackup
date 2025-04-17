export interface Colors {
  primary: string;
  secondary: string;
  text: string;
  textSecondary: string;
  border: string;
  card: string;
  background: string;
}

export interface Spacing {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

export interface BorderRadius {
  sm: number;
  md: number;
  lg: number;
}

export interface Theme {
  colors: Colors;
  mode: 'light' | 'dark';
  spacing: Spacing;
  borderRadius: BorderRadius;
}

export type ThemeMode = 'light' | 'dark';

export interface ThemeState {
  mode: ThemeMode;
}
