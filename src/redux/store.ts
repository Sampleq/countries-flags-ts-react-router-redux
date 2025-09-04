import { configureStore } from '@reduxjs/toolkit';

import colorThemeReducer from './slices/colorThemeSlice';
import countriesReducer from './slices/countriesSlice';
import filtersReducer from './slices/filtersSlice';
import detailedCountryReducer from './slices/detailedCountrySlice';

import axios from 'axios';
import * as api from '@/api_config';

export const store = configureStore({
  reducer: {
    colorTheme: colorThemeReducer,
    filters: filtersReducer,
    country: detailedCountryReducer,
    countries: countriesReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: { extraArgument: { client: axios, api } } }),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
