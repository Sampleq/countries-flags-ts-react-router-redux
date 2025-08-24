export type ColorTheme = 'light' | 'dark';

export type LoadingStatus = 'idle' | 'loading' | 'received' | 'rejected';

export type Region = 'Africa' | 'America' | 'Asia' | 'Europe' | 'Oceania';

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
