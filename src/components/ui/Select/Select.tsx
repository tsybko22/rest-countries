import { type SelectHTMLAttributes } from 'react';
import styles from './Select.module.scss';

export type SelectOption = {
  value: string;
  label: string;
};

interface SelectProps {
  options: SelectOption[];
  selectProps?: SelectHTMLAttributes<HTMLSelectElement>;
}

const Select = ({ options, selectProps }: SelectProps) => {
  return (
    <div className={styles.selectWrapper}>
      <select
        className={styles.select}
        {...selectProps}
      >
        {options.map((option) => (
          <option
            key={option.value}
            className={styles.selectOption}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
