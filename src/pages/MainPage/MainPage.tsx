import { useFetch } from '@/helpers/hooks/useFetch';
import { useEffect, useMemo, useState } from 'react';
import { Navigate } from 'react-router-dom';

import { getAllCountries } from '@/api/countriesApi';
import { type Country } from '@/api/index.dto';

import CountriesTable from '@/components/CountriesTable';
import FilterForm from '@/components/FilterForm';
import MainContainer from '@/components/MainContainer';
import Search from '@/components/Search';
import CountriesSkeleton from '@/components/ui/CountriesSkeleton';

import styles from './MainPage.module.scss';

const MainPage = () => {
  const { data, isLoading, error } = useFetch<Country[]>(getAllCountries);
  //exclude Antarctica from list
  const countries = useMemo(
    () => data?.filter((country) => country.name.common !== 'Antarctica') || [],
    [data]
  );
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);

  const [searchValue, setSearchValue] = useState<string>('');

  const handleSearch = (searchTerm?: string) => {
    if (typeof searchTerm === 'string') {
      setSearchValue(searchTerm);
    }

    const countiesByName = countries.filter(({ name }) =>
      name.common.toLowerCase().includes(searchValue)
    );
    setFilteredCountries(countiesByName);
  };

  useEffect(() => {
    handleSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  useEffect(() => {
    setFilteredCountries(countries);
  }, [countries]);

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
        {!isLoading && (
          <Search
            searchTerm={searchValue}
            onSearch={handleSearch}
          />
        )}
      </div>

      <div className={styles.mainPageWrapper}>
        <FilterForm />
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
