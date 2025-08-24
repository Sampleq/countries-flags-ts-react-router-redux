import type { Country, LoadingStatus } from '@/types';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { getAllCountries } from '../asyncThunks';
import type { RootState } from '../store';

const initialState: {
  allAountries: Country[];
  loadingStatus: LoadingStatus;
} = {
  allAountries: [],
  loadingStatus: 'idle',
};

const countriesSlice = createSlice({
  name: '@countries',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllCountries.pending, (state) => {
      state.loadingStatus = 'loading';
    });

    builder.addCase(getAllCountries.fulfilled, (state, action) => {
      state.allAountries = action.payload;
      state.loadingStatus = 'received';
    });

    builder.addCase(getAllCountries.rejected, (state) => {
      state.loadingStatus = 'rejected';
    });
  },
});

export const selectAllCountries = (state: RootState) =>
  state.countries.allAountries;

export default countriesSlice.reducer;
