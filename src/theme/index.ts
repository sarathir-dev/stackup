import {lightColors, darkColors} from './colors';
import {Theme} from '../types/theme';

export const getTheme = (mode: 'light' | 'dark'): Theme => ({
  colors: mode === 'dark' ? darkColors : lightColors,
  mode,
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  borderRadius: {
    sm: 4,
    md: 8,
    lg: 16,
  },
});
