import { Link } from 'react-router-dom';

import styles from './Header.module.scss';

import logoSvg from '@images/logo.svg';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link
        to="/"
        className={styles.logo}
      >
        <img
          src={logoSvg}
          alt="Logo"
        />
        REST Countries
      </Link>
    </header>
  );
};

export default Header;
