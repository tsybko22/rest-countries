import { type Country } from '@/types';

import styles from './CountryInfo.module.scss';

interface CountryInfoProps {
  country: Country;
}

const CountryInfo = ({ country }: CountryInfoProps) => {
  const getLanguages = (): string => {
    const languages: string[] = [];

    for (const value of Object.values(country.languages)) {
      languages.push(value);
    }

    return languages.join(', ');
  };

  const getCurrencies = (): string => {
    const currencies: string[] = [];

    for (const value of Object.values(country.currencies)) {
      currencies.push(value.name);
    }

    return currencies.join(', ');
  };

  return (
    <article className={styles.country}>
      <img
        className={styles.countryImg}
        src={country.flags.svg}
        alt={country.flags.alt}
      />
      <h1 className={styles.countryTitle}>{country.name.common}</h1>
      <h2 className={styles.countrySubTitle}>{country.name.official}</h2>
      <div className={styles.countryWrapper}>
        <div className={styles.countryBadge}>
          <span>Population</span>
          <span>{country.population.toLocaleString()}</span>
        </div>
        <div className={styles.countryBadge}>
          <span>Area</span>
          <span>{country.area.toLocaleString()}</span>
        </div>
      </div>
      <table className={styles.countryTable}>
        <tbody>
          <tr className={styles.countryTableRow}>
            <th className={styles.countryTableHeading}>Capital</th>
            <td className={styles.countryTableData}>{country.capital}</td>
          </tr>
          <tr className={styles.countryTableRow}>
            <th className={styles.countryTableHeading}>Subregion</th>
            <td className={styles.countryTableData}>{country.subregion}</td>
          </tr>
          <tr className={styles.countryTableRow}>
            <th className={styles.countryTableHeading}>Language</th>
            <td className={styles.countryTableData}>{getLanguages()}</td>
          </tr>
          <tr className={styles.countryTableRow}>
            <th className={styles.countryTableHeading}>Currencies</th>
            <td className={styles.countryTableData}>{getCurrencies()}</td>
          </tr>
          <tr className={styles.countryTableRow}>
            <th className={styles.countryTableHeading}>Continents</th>
            <td className={styles.countryTableData}>{country.continents.join(', ')}</td>
          </tr>
        </tbody>
      </table>
    </article>
  );
};

export default CountryInfo;
