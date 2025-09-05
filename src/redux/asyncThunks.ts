import type { Country, DetailedCountry } from '@/types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import type { RootState } from './store';
import type { AxiosInstance } from 'axios';

import * as api from '@/api_config';

export const getAllCountries = createAsyncThunk<
  Country[],
  string,
  {
    state: RootState;
    rejectValue: string;
    extra: {
      client: AxiosInstance;
      api: typeof api;
    };
  }
  // >('@countries/getAllCountries', async (url, thunkAPI) => { // for OPT - 2: fetch
>('@countries/getAllCountries', async (_, thunkAPI) => {
  try {
    // OPT - 1: axios
    const {
      extra: { client, api },
    } = thunkAPI;

    const axiosResponse = await client.get(api.ALL_COUNTRIES_URL);
    // console.log(axiosResponse);

    if (axiosResponse.status !== 200) {
      throw new Error('Error while fetch all countries');
    }

    const axiosData: Country[] = axiosResponse.data;
    // console.log(axiosData);

    return axiosData;

    // // OPT - 2: fetch
    // const response = await fetch(url);
    // if (!response.ok) {
    //   throw new Error('Error while fetch all countries');
    // }
    // const result: Country[] = await response.json();
    // return result;
  } catch (error) {
    thunkAPI.rejectWithValue((error as Error).message);
    return [];
  }
});

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
