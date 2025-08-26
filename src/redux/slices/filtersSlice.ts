import type { Region } from '@/types';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

const initialState: {
  name: string;
  region: Lowercase<Region> | null;
} = {
  name: '',
  region: null,
};

const filtersSlice = createSlice({
  name: '@filters',
  initialState,
  reducers: {
    changeFilterName: (state, action: PayloadAction<string>) => {
      state.name = action.payload; // immer
    },

    clearFilterName: (state) => {
      state.name = ''; // immer
    },

    changeFilterRegion: (
      state,
      action: PayloadAction<Lowercase<Region> | null>
    ) => {
      state.region = action.payload; // immer
    },

    clearAllFilters: () => {
      return initialState;
    },
  },
});

export const {
  changeFilterName,
  clearFilterName,
  changeFilterRegion,
  clearAllFilters,
} = filtersSlice.actions;

export const selectFilterName = (state: RootState) => state.filters.name;
export const selectFilterRegion = (state: RootState) => state.filters.region;

export default filtersSlice.reducer;
