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

interface Name {
  common: string;
  official: string;
}

interface Currencies {
  [key: string]: {
    name: string;
    symbol: string;
  };
}

interface Flags {
  png: string;
  svg: string;
  alt: string;
}
