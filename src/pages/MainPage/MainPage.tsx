import { useFetch } from '@/helpers/hooks/useFetch';
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

  if (error) {
    return (
      <Navigate
        to="/error-page"
        replace={true}
      />
    );
  }
  //exclude Antarctica from results
  const countries = data?.filter((country) => country.name.common !== 'Antarctica') || [];

  return (
    <MainContainer className={styles.mainPageContainer}>
      <div className={styles.mainPageHeader}>
        <p className={styles.mainPageTitle}>Found {countries.length} countries</p>
        <Search />
      </div>

      <FilterForm />

      {!isLoading ? (
        <CountriesTable countries={countries} />
      ) : (
        <CountriesSkeleton count={10} />
      )}
    </MainContainer>
  );
};

export default MainPage;
