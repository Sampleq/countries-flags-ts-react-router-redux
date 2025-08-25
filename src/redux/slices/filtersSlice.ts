import type { Region } from '@/types';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

const initialState: {
  name: string;
  region: Region | null;
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
  },
});

export const { changeFilterName, clearFilterName } = filtersSlice.actions;

export const selectFilterName = (state: RootState) => state.filters.name;

export default filtersSlice.reducer;
