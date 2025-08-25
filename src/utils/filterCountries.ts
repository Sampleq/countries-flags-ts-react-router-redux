import type { Country, Region } from '@/types';

export function filterCountries(
  allCountries: Country[],
  filterName: string = '',
  filterRegion?: Lowercase<Region> | null
): Country[] {
  if (!filterName && !filterRegion) {
    return allCountries;
  }

  return allCountries.filter((country) => {
    const matchName = country.name.common
      .toLowerCase()
      .includes(filterName.trim().toLowerCase());

    const matchRegion = country.region
      .toLowerCase()
      .includes(filterRegion?.toLowerCase() || ''); // API has 'Americas' for 'America'

    return matchName && matchRegion;
  });
}
