import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Appearance} from 'react-native';
import {ThemeMode, ThemeState} from '../types/theme';

const initialState: ThemeState = {
  mode: (Appearance.getColorScheme() as ThemeMode) || 'light',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeMode>) => {
      state.mode = action.payload;
    },
    toggleTheme: state => {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
    },
  },
});

export const {setTheme, toggleTheme} = themeSlice.actions;
export default themeSlice.reducer;
