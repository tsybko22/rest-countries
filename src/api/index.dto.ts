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

export interface Name {
  common: string;
  official: string;
}

export interface Currencies {
  [key: string]: {
    name: string;
    symbol: string;
  };
}

export interface Flags {
  png: string;
  svg: string;
  alt: string;
}
