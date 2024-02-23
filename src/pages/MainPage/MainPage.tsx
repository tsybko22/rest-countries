import { useMemo, useState } from 'react';
import { Navigate } from 'react-router-dom';

import { getAllCountries } from '@/api/countriesApi';
import { useCountriesForm } from '@/helpers/hooks/useCountiesForm';
import { useFetch } from '@/helpers/hooks/useFetch';
import { type Country } from '@/types';

import CountriesTable from '@/components/CountriesTable';
import FilterForm from '@/components/FilterForm';
import MainContainer from '@/components/MainContainer';
import Search from '@/components/Search';
import CountriesSkeleton from '@/components/ui/CountriesSkeleton';

import styles from './MainPage.module.scss';

const MainPage = () => {
  const { data, isLoading, error } = useFetch<Country[]>(getAllCountries);
  //Exclude Antarctica from list
  const countries = useMemo(
    () => data?.filter((country) => country.name.common !== 'Antarctica') || [],
    [data]
  );
  const [searchValue, setSearchValue] = useState<string>('');
  const { formState, filteredCountries } = useCountriesForm(countries, searchValue);

  const handleSearch = (searchTerm: string) => {
    setSearchValue(searchTerm);
  };

  if (error) {
    return (
      <Navigate
        to="/error-page"
        replace={true}
      />
    );
  }

  return (
    <MainContainer className={styles.mainPageContainer}>
      <div className={styles.mainPageHeader}>
        <p className={styles.mainPageTitle}>Found {filteredCountries.length} countries</p>

        <Search
          searchTerm={searchValue}
          onSearch={handleSearch}
        />
      </div>

      <div className={styles.mainPageWrapper}>
        <FilterForm
          formData={formState.formData}
          setFormData={formState.setFormData}
        />

        {!isLoading ? (
          <CountriesTable countries={filteredCountries} />
        ) : (
          <CountriesSkeleton count={10} />
        )}
      </div>
    </MainContainer>
  );
};

export default MainPage;
