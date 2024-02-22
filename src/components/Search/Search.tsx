import Input from '../ui/Input';

import styles from './Search.module.scss';

interface SearchProps {
  searchTerm: string;
  onSearch: (searchTerm: string) => void;
}

const Search = ({ searchTerm, onSearch }: SearchProps) => {
  return (
    <div className={styles.search}>
      <Input
        className={styles.searchInput}
        placeholder="Search by Name"
        value={searchTerm}
        onChange={(evt) => {
          onSearch(evt.target.value);
        }}
      />
    </div>
  );
};

export default Search;
