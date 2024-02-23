import { Link } from 'react-router-dom';

import { type Country } from '@/types';

import styles from './CountriesTable.module.scss';

interface CountriesTableProps {
  countries: Country[];
}

const CountriesTable = ({ countries }: CountriesTableProps) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th className={styles.tableHeading}>Flag</th>
          <th className={styles.tableHeading}>Name</th>
          <th className={styles.tableHeading}>Population</th>
          <th className={styles.tableHeading}>Area (km²)</th>
          <th className={styles.tableHeading}>Region</th>
        </tr>
      </thead>
      <tbody>
        {countries.length === 0 ? (
          <tr>
            <th colSpan={5}>
              <h2 className={styles.tableTitle}>No results.</h2>
            </th>
          </tr>
        ) : (
          <>
            {countries.map((country) => (
              <tr key={country.cca2}>
                <td className={styles.tableData}>
                  <img
                    className={styles.tableImg}
                    src={country.flags.svg}
                    alt={country.flags.alt}
                  />
                </td>
                <td className={styles.tableData}>
                  <Link to={`/country/${country.cca2}`}>
                    {window.innerWidth >= 576 ? country.name.common : country.cca2}
                  </Link>
                </td>
                <td className={styles.tableData}>
                  {country.population.toLocaleString()}
                </td>
                <td className={styles.tableData}>{country.area.toLocaleString()}</td>
                <td className={styles.tableData}>{country.region}</td>
              </tr>
            ))}
          </>
        )}
      </tbody>
    </table>
  );
};

export default CountriesTable;
