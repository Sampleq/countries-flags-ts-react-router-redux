import type { Country, Region } from '@/types';

export function filterCountries(
  allCountries: Country[],
  filterName?: string,
  filterRegion?: Region | null
): Country[] {
  if (!filterName && !filterRegion) {
    return allCountries;
  }

  return allCountries.filter((country) => {
    const matchName =
      filterName &&
      country.name.common
        .toLowerCase()
        .includes(filterName.trim().toLowerCase());

    return matchName;
  });
}
