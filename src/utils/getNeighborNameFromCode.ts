import type { Country } from '@/types';

// Multiple loop through allCounties for each border, but less code in CountryInfo.tsx
export function getNeighborNameFromCode(
  allCountries: Country[],
  border: string
): Country['name']['common'] {
  const country = allCountries.find((country) => border === country.cca3);
  return country ? country.name.common : border;
}
