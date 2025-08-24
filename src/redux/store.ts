import { configureStore } from '@reduxjs/toolkit';

import colorThemeReducer from './slices/colorThemeSlice';
import countriesSliceReducer from './slices/countriesSlice';

export const store = configureStore({
  reducer: {
    colorTheme: colorThemeReducer,
    countries: countriesSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
