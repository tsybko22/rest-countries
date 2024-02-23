import { FilterCountriesForm } from '@/types';

export const SELECT_OPTIONS = [
  { value: 'population', label: 'Population' },
  { value: 'name', label: 'Name' },
  { value: 'area', label: 'Area' },
];

export const RADIOBUTTONS_LIST = [
  { name: 'region', value: 'all' },
  { name: 'region', value: 'europe' },
  { name: 'region', value: 'americas' },
  { name: 'region', value: 'antarctic' },
  { name: 'region', value: 'africa' },
  { name: 'region', value: 'asia' },
  { name: 'region', value: 'oceania' },
];

export const INITIAL_FORM_STATE: FilterCountriesForm = {
  sortBy: 'population',
  region: 'all',
  unMember: false,
  independent: false,
};
