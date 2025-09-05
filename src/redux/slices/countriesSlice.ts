import type { Country, LoadingStatus } from '@/types';
import { createSlice } from '@reduxjs/toolkit';
import { getAllCountries } from '../asyncThunks';
import type { RootState } from '../store';

const initialState: {
  allCountries: Country[];
  loadingStatus: LoadingStatus;
  error: null | string;
} = {
  allCountries: [],
  loadingStatus: 'idle',
  error: null,
};

const countriesSlice = createSlice({
  name: '@countries',
  initialState,

  reducers: {
    clearError: (state) => {
      state.error = null; // immer
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getAllCountries.pending, (state) => {
        state.loadingStatus = 'loading';
        state.error = null;
      })
      .addCase(getAllCountries.fulfilled, (state, action) => {
        state.loadingStatus = 'received';
        state.allCountries = action.payload;
      })
      .addCase(getAllCountries.rejected, (state, action) => {
        state.loadingStatus = 'rejected';
        state.error = action.payload ?? 'Cannot load data'; // задаём строку с помощью ?? чтобы избежать ошибок ts
      });
  },
});

export const { clearError } = countriesSlice.actions;

export const selectAllCountries = (state: RootState) => state.countries;

export default countriesSlice.reducer;
