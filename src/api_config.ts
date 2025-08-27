import type { Country } from './types';

const BASE_URL = 'https://restcountries.com/v3.1/';

export const ALL_COUNTRIES =
  BASE_URL + 'all?fields=name,capital,flags,population,region,cca3';

export const getDetailedCountryURL = (name: Country['name']['common']) =>
  BASE_URL + 'name/' + name;

export const filterByCode = (codes: string[]) =>
  BASE_URL + 'alpha?codes=' + codes.join(',');
