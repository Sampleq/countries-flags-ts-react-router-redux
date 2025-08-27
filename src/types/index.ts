export type ColorTheme = 'light' | 'dark';

export type LoadingStatus = 'idle' | 'loading' | 'received' | 'rejected';

export type Region =
  | 'Africa'
  | 'America'
  | 'Asia'
  | 'Europe'
  | 'Oceania'
  | 'Antarctic';

// value и label будут строго согласованы
export type SelectOption = {
  [R in Region]: { value: Lowercase<R>; label: R }; // используем имя параметра типа R вместо key
}[Region];

export interface Country {
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  name: {
    common: string;
    official: string;
    nativeName: {
      ara: {
        official: string;
        common: string;
      };
    };
  };
  cca3: string;
  capital: [string];
  region: Region;
  population: number;
}

export interface DetailedCountry {
  name: {
    common: string;
    official: string;
    nativeName: {
      [key: string]: {
        official: string;
        common: string;
      };
    };
  };
  tld: string[];
  cca2: string;
  ccn3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: true;
  currencies: {
    EUR: {
      symbol: string;
      name: string;
    };
  };
  idd: {
    root: string;
    suffixes: [string];
  };
  capital: [string];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: {
    cat: string;
  };
  latlng: number[];
  landlocked: boolean;
  borders?: string[];
  area: number;
  demonyms: {
    eng: {
      f: string;
      m: string;
    };
    fra: {
      f: string;
      m: string;
    };
  };
  cca3: string;
  translations: {
    [key: string]: {
      official: string;
      common: string;
    };
  };
  flag: string;
  maps: {
    googleMaps: string;
    openStreetMaps: string;
  };
  population: number;
  fifa: string;
  car: {
    signs: [string];
    side: string;
  };
  timezones: string[];
  continents: string[];
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  coatOfArms: {
    png: string;
    svg: string;
  };
  startOfWeek: string;
  capitalInfo: {
    latlng: [number, number];
  };
  postalCode: {
    format: string;
    regex: string;
  };
}
