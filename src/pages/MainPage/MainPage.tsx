import { useFetch } from '@/helpers/hooks/useFetch';
import { Navigate } from 'react-router-dom';

import { getAllCountries } from '@/api/countriesApi';
import { type Country } from '@/api/index.dto';

import CountriesTable from '@/components/CountriesTable';
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
    <>
      <div className={styles.mainPageHeader}>
        <p className={styles.mainPageTitle}>Found {countries.length || 0} countries</p>
        <Search />
      </div>
      {!isLoading ? (
        <CountriesTable countries={countries} />
      ) : (
        <CountriesSkeleton count={10} />
      )}
    </>
  );
};

export default MainPage;
