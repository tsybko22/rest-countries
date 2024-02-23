export interface Country {
  name: Name;
  cca2: string;
  independent: boolean;
  unMember: boolean;
  currencies: Currencies;
  capital: string[];
  region: string;
  subregion: string;
  languages: Record<string, string>;
  borders: string[];
  area: number;
  population: number;
  continents: string[];
  flags: Flags;
}

export type Name = {
  common: string;
  official: string;
};

export type Currencies = {
  [key: string]: {
    name: string;
    symbol: string;
  };
};

export type Flags = {
  png: string;
  svg: string;
  alt: string;
};

export type Region =
  | 'all'
  | 'europe'
  | 'americas'
  | 'antarctic'
  | 'africa'
  | 'asia'
  | 'oceania';

export interface FilterCountriesForm {
  sortBy: 'population' | 'name' | 'area';
  region: Region;
  unMember: boolean;
  independent: boolean;
}
