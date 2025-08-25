export type ColorTheme = 'light' | 'dark';

export type LoadingStatus = 'idle' | 'loading' | 'received' | 'rejected';

export type Region = 'Africa' | 'America' | 'Asia' | 'Europe' | 'Oceania';

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
  capital: [string];
  region: Region;
  population: number;
}
