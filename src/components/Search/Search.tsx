import Input from '../ui/Input';

import styles from './Search.module.scss';

const Search = () => {
  return (
    <div className={styles.search}>
      <Input
        className={styles.searchInput}
        placeholder="Search by Name, Region, Subregion"
      />
    </div>
  );
};

export default Search;
