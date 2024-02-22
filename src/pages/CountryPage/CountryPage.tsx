import { useFetch } from '@/helpers/hooks/useFetch';
import { Navigate, useParams } from 'react-router-dom';

import { getCountriesByCode } from '@/api/countriesApi';
import { type Country } from '@/types';

import CountryInfo from '@/components/CountryInfo';
import MainContainer from '@/components/MainContainer';
import NeighbouringCountries from '@/components/NeighbouringCountries';
import Loader from '@/components/ui/Loader';

import styles from './CountryPage.module.scss';

const CountryPage = () => {
  const { countryCode } = useParams();
  const { data, isLoading, error } = useFetch<Country[]>(
    getCountriesByCode,
    countryCode as string
  );

  if (error) {
    return (
      <Navigate
        to="/error-page"
        replace={true}
      />
    );
  }

  return (
    <MainContainer className={styles.countryContainer}>
      {data && !isLoading ? (
        <>
          <CountryInfo country={data[0]} />
          {
            // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
            data[0].borders && <NeighbouringCountries borders={data[0].borders} />
          }
        </>
      ) : (
        <Loader className={styles.loader} />
      )}
    </MainContainer>
  );
};

export default CountryPage;
