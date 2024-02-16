import { useFetch } from '@/helpers/hooks/useFetch';
import { Link, Navigate } from 'react-router-dom';

import { getCountriesByCode } from '@/api/countriesApi';
import { Country } from '@/api/index.dto';

import NeighboursSkeleton from '../ui/NeighboursSkeleton';

import styles from './NeighbouringCountries.module.scss';

interface NeighbouringCountriesProps {
  borders: string[];
}

const NeighbouringCountries = ({ borders }: NeighbouringCountriesProps) => {
  const {
    data: neighbours,
    isLoading,
    error,
  } = useFetch<Country[]>(getCountriesByCode, borders.join(','));

  if (isLoading) return <NeighboursSkeleton count={3} />;

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
      <h3 className={styles.neighboursTitle}>Neighbouring Countries</h3>
      <ul className={styles.neighbours}>
        {neighbours &&
          neighbours.map((neighbour) => (
            <Link
              key={neighbour.cca2}
              to={`/country/${neighbour.cca2}`}
              replace
            >
              <li>
                <img
                  className={styles.neighboursImg}
                  src={neighbour.flags.svg}
                  alt={neighbour.flags.alt}
                />
                <h3 className={styles.neighboursItemTitle}>{neighbour.name.common}</h3>
              </li>
            </Link>
          ))}
      </ul>
    </>
  );
};

export default NeighbouringCountries;
