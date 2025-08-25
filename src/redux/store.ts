import { configureStore } from '@reduxjs/toolkit';

import colorThemeReducer from './slices/colorThemeSlice';
import countriesSliceReducer from './slices/countriesSlice';
import filtersSliceReducer from './slices/filtersSlice';

export const store = configureStore({
  reducer: {
    colorTheme: colorThemeReducer,
    filters: filtersSliceReducer,
    countries: countriesSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
