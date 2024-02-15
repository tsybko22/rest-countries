import { get } from '@/helpers/utils';
import { Country } from './index.dto';

const BASE_URL = 'https://restcountries.com/v3.1';

export const getAllCountries = () => get<Country[]>(`${BASE_URL}/all`);
export const getCountryByCode = (code: string) =>
  get<Country[]>(`${BASE_URL}/alpha/${code}`);
