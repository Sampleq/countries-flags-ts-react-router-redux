import { ALL_COUNTRIES_URL } from '@/api_config';
import { getAllCountries } from '@/redux/asyncThunks';
import { useAppDispatch } from '@/redux/redux-hook';
import { selectAllCountries } from '@/redux/slices/countriesSlice';
import {
  selectFilterName,
  selectFilterRegion,
} from '@/redux/slices/filtersSlice';
import type { Country, LoadingStatus } from '@/types';
import { filterCountries } from '@/utils/filterCountries';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

// custom hook
export const useFilteredCountries: () => [
  Country[],
  {
    allCountries: Country[];
    loadingStatus: LoadingStatus;
    error: null | string;
  },
  filterName: string // using name for array element
] = () => {
  const dispatch = useAppDispatch();

  const countriesData = useSelector(selectAllCountries);
  // console.log(countriesData);
  const { allCountries } = countriesData;

  const filterName = useSelector(selectFilterName);
  const filterRegion = useSelector(selectFilterRegion);

  const filteredCountries = filterCountries(
    allCountries,
    filterName,
    filterRegion
  );

  useEffect(() => {
    if (!allCountries.length) {
      dispatch(getAllCountries(ALL_COUNTRIES_URL)); //param is not used when use extra with api obj
    }
  }, []);

  return [filteredCountries, countriesData, filterName];
};
