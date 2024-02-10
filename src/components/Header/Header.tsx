import { Link } from 'react-router-dom';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/">
        <span className={styles.logo}>REST Countries</span>
      </Link>
    </header>
  );
};

export default Header;
