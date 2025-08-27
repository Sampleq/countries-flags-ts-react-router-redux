import type { Country } from '@/types';

// Single loop through allCounties but more code in CountryInfo.tsx
export function getNeighborsNamesFromCodes(
  allCountries: Country[],
  borders: string[]
): Country['name']['common'][] {
  return allCountries
    .filter((country) => borders.some((border) => border === country.cca3))
    .map((filteredCountry) => filteredCountry.name.common);
}
