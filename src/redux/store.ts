import { configureStore } from '@reduxjs/toolkit';

import colorThemeReducer from './slices/colorThemeSlice';
import countriesReducer from './slices/countriesSlice';
import filtersReducer from './slices/filtersSlice';
import detailedCountryReducer from './slices/detailedCountrySlice';

import { logger } from 'redux-logger';
import { myLogger } from './myMiddleware';
console.log('redux-logger', logger);

export const store = configureStore({
  reducer: {
    colorTheme: colorThemeReducer,
    filters: filtersReducer,
    country: detailedCountryReducer,
    countries: countriesReducer,
  },

  // // OK, obj method
  // middleware(getDefaultMiddleware) {
  //   return getDefaultMiddleware().concat(logger);
  // },

  // OK
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger, myLogger), // OK, short arr fnc

  // preloadedState: {
  //   colorTheme: 'light',
  //   filters: {
  //     name: '',
  //     region: null,
  //   },
  //   country: {
  //     country: null,
  //     loadingStatus: 'idle',
  //     error: null,
  //   },
  //   countries: {
  //     allCountries: [],
  //     loadingStatus: 'received',
  //     error: null,
  //   },
  // },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
