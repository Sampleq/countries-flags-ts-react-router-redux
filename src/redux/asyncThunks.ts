import type { Country } from '@/types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import type { RootState } from './store';

export const getAllCountries = createAsyncThunk<
  Country[],
  string,
  { state: RootState; rejectValue: string }
>('@countries/getAllCountries', async (url, thunkAPI) => {
  //   try {
  //   } catch (error) {}

  const response = await fetch(url);

  if (!response.ok) {
    thunkAPI.rejectWithValue('Error while fetch all countries');
  }

  const result: Country[] = await response.json();
  return result;
});
