import { Link } from 'react-router-dom';

import styles from './ErrorPage.module.scss';

const ErrorPage = () => {
  return (
    <div className={styles.errorPage}>
      <h1 className={styles.errorPageTitle}>Oops!</h1>
      <p className={styles.errorPageText}>Sorry, an unexpected error has occurred.</p>
      <Link
        to="/"
        className={styles.errorPageLink}
      >
        You can go back to the home page by clicking here, though!
      </Link>
    </div>
  );
};

export default ErrorPage;
