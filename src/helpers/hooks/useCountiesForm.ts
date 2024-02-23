import { useEffect, useState, type Dispatch } from 'react';

import { INITIAL_FORM_STATE } from '@/constants';
import { FilterCountriesForm, type Country } from '@/types';

type FormState = {
  formData: FilterCountriesForm;
  setFormData: Dispatch<React.SetStateAction<FilterCountriesForm>>;
};

interface CountriesForm {
  formState: FormState;
  filteredCountries: Country[];
}

export const useCountriesForm = (
  countries: Country[],
  searchTerm: string
): CountriesForm => {
  const [formData, setFormData] = useState<FilterCountriesForm>(INITIAL_FORM_STATE);
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);

  const sortCountries = (countries: Country[]) => {
    switch (formData.sortBy) {
      case 'population':
        return countries.sort((a, b) => b.population - a.population);
      case 'name':
        return countries.sort((a, b) => a.name.common.localeCompare(b.name.common));
      case 'area':
        return countries.sort((a, b) => b.area - a.area);

      default:
        return countries;
    }
  };

  const handleFormFilter = () => {
    let newFilteredCountries: Country[] = [...countries];

    if (formData.region === 'all') {
      newFilteredCountries = [...countries];
    } else {
      newFilteredCountries = newFilteredCountries.filter(
        (country) => country.region.toLowerCase() === formData.region
      );
    }

    if (formData.independent) {
      newFilteredCountries = newFilteredCountries.filter(
        (country) => country.independent
      );
    }

    if (formData.unMember) {
      newFilteredCountries = newFilteredCountries.filter((country) => country.unMember);
    }

    //Before setting the new state filter array using searchTerm
    newFilteredCountries = newFilteredCountries.filter(({ name }) =>
      name.common.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredCountries(newFilteredCountries);
  };

  useEffect(() => {
    setFilteredCountries(countries);
  }, [countries]);

  useEffect(
    handleFormFilter,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [formData, searchTerm]
  );

  return {
    formState: { formData, setFormData },
    filteredCountries: sortCountries(filteredCountries),
  };
};
