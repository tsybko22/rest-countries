import { Navigate } from 'react-router-dom';

import { type Country } from '@/api/index.dto';

import Search from '@/components/Search';
import CountriesSkeleton from '@/components/ui/CountriesSkeleton';

import CountriesTable from '@/components/CountriesTable';
import styles from './MainPage.module.scss';

interface MainPageProps {
  countries: Country[] | null | undefined;
  isLoading: boolean;
  error: Error | null;
}

const MainPage = ({ countries, isLoading, error }: MainPageProps) => {
  if (error) {
    return (
      <Navigate
        to="/error-page"
        replace={true}
      />
    );
  }

  return (
    <>
      <div className={styles.mainPageHeader}>
        <p className={styles.mainPageTitle}>Found {countries?.length || 0} countries</p>
        <Search />
      </div>
      {countries && !isLoading ? (
        <CountriesTable countries={countries} />
      ) : (
        <CountriesSkeleton count={10} />
      )}
    </>
  );
};

export default MainPage;
