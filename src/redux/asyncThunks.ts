import type { Country } from '@/types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import type { RootState } from './store';

export const getAllCountries = createAsyncThunk<
  Country[],
  string,
  { state: RootState; rejectValue: string }
>('@countries/getAllCountries', async (url, thunkAPI) => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Error while fetch all countries');
    }

    const result: Country[] = await response.json();
    return result;
  } catch (error) {
    thunkAPI.rejectWithValue((error as Error).message);
    return [];
  }
});
