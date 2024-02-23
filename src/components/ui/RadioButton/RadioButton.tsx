import { type InputHTMLAttributes } from 'react';

import styles from './RadioButton.module.scss';

//Exclude "type" prop because for this implementation component always gonna be radio type
interface RadioButtonProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  labelText?: string;
}

const RadioButton = ({ labelText, ...props }: RadioButtonProps) => {
  return (
    <label className={styles.radioLabel}>
      <input
        type="radio"
        className={styles.radioInput}
        {...props}
      />
      <span className={styles.radio}>{labelText}</span>
    </label>
  );
};

export default RadioButton;
