import type { Country, DetailedCountry } from '@/types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import type { RootState } from './store';

export const getAllCountries = createAsyncThunk<
  Country[],
  string,
  { state: RootState; rejectValue: string }
>(
  '@countries/getAllCountries',
  async (url, thunkAPI) => {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('Error while fetch all countries');
      }

      const result: Country[] = await response.json();
      return result;
    } catch (error) {
      thunkAPI.extra;
      thunkAPI.rejectWithValue((error as Error).message);
      return [];
    }
  },
  {
    condition: (url, api) => {
      console.log('api.extra', api.extra);

      if (api.getState().countries.loadingStatus === 'loading') {
        return false;
      }
    },
  }
);

export const getDetailedCountry = createAsyncThunk<
  DetailedCountry | null,
  string,
  { state: RootState; rejectValue: string }
>('@country/getDetailedCountry', async (url, thunkAPI) => {
  try {
    const response = await fetch(url);

    if (!response.ok || response.status !== 200) {
      throw new Error('Error while fetch detailed country info');
    }

    const result: DetailedCountry = (await response.json())[0];
    return result;
  } catch (error) {
    thunkAPI.rejectWithValue((error as Error).message);
    return null;
  }
});

// export const getNeighborsNames = createAsyncThunk<
//   Country['name']['common'][],
//   string[]
// >('@country/getNeighborsNames', async (borders) => {});
