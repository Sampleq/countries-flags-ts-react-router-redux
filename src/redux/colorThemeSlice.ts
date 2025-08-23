import type { ColorTheme } from '@/types';
import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from './store';

const initialState: ColorTheme = 'light';

const colorThemeSlice = createSlice({
  name: '@colorTheme',
  initialState: initialState as ColorTheme,
  reducers: {
    switchColorTheme: (state) => {
      return state === 'light' ? 'dark' : 'light';
    },
  },
});

export const { switchColorTheme } = colorThemeSlice.actions;

export const selectColorTheme = (state: RootState) => state.colorTheme;

export default colorThemeSlice.reducer;
