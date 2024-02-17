import Checkbox from '../ui/Checkbox';
import RadioButton from '../ui/RadioButton';
import Select from '../ui/Select';

import styles from './FilterForm.module.scss';

const FilterForm = () => {
  return (
    <form className={styles.form}>
      <fieldset className={styles.formFieldset}>
        <legend>Sort by</legend>
        <Select />
      </fieldset>

      <fieldset className={styles.formFieldset}>
        <legend>Region</legend>
        <div className={styles.formRadioGroup}>
          <RadioButton
            name="region"
            value="europe"
            labelText="Europe"
            defaultChecked
          />
          <RadioButton
            name="region"
            value="americas"
            labelText="Americas"
          />
          <RadioButton
            name="region"
            value="antarctic"
            labelText="Antarctic"
          />
          <RadioButton
            name="region"
            value="africa"
            labelText="Africa"
          />
          <RadioButton
            name="region"
            value="asia"
            labelText="Asia"
          />
          <RadioButton
            name="region"
            value="oceania"
            labelText="Oceania"
          />
        </div>
      </fieldset>

      <fieldset className={styles.formFieldset}>
        <legend>Status</legend>
        <div className={styles.formCheckboxGroup}>
          <Checkbox labelText="Member of the United Nations" />
          <Checkbox labelText="Independent" />
        </div>
      </fieldset>
    </form>
  );
};

export default FilterForm;
