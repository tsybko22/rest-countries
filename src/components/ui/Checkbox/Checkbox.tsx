import { type InputHTMLAttributes } from 'react';

import styles from './Checkbox.module.scss';

//Exclude "type" prop because for this implementation component always gonna be checkbox type
interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  labelText?: string;
}

const Checkbox = ({ labelText, ...props }: CheckboxProps) => {
  return (
    <label className={styles.checkboxLabel}>
      <input
        className={styles.checkboxInput}
        type="checkbox"
        {...props}
      />
      <span className={styles.checkbox}></span>
      {labelText}
    </label>
  );
};

export default Checkbox;
