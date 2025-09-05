import type { DetailedCountry, LoadingStatus } from '@/types';
import { createSlice } from '@reduxjs/toolkit';
import { getDetailedCountry } from '../asyncThunks';
import type { RootState } from '../store';

const initialState: {
  country: DetailedCountry | null;
  loadingStatus: LoadingStatus;
  error: null | string;
} = {
  country: null,
  loadingStatus: 'idle',
  error: null,
};

const detailedCountrySlice = createSlice({
  name: 'detailedCountry',
  initialState,

  reducers: {
    resetDetailedCountryState: () => initialState,
  },

  extraReducers: (builder) => {
    builder
      .addCase(getDetailedCountry.pending, (state) => {
        state.loadingStatus = 'loading';
        state.error = null;
      })
      .addCase(getDetailedCountry.fulfilled, (state, action) => {
        state.country = action.payload;
        state.loadingStatus = 'received';
      })
      .addCase(getDetailedCountry.rejected, (state, action) => {
        state.loadingStatus = 'rejected';
        state.error = action.payload ?? 'Cannot load data'; // задаём строку с помощью ?? чтобы избежать ошибок ts
      });
  },
});

export const { resetDetailedCountryState } = detailedCountrySlice.actions;

export const selectDetailedCountry = (state: RootState) => state.country;

export default detailedCountrySlice.reducer;
