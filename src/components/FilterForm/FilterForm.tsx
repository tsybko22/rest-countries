import { type ChangeEvent, type Dispatch } from 'react';

import { RADIOBUTTONS_LIST, SELECT_OPTIONS } from '@/constants';

import Checkbox from '../ui/Checkbox';
import RadioButton from '../ui/RadioButton';
import Select from '../ui/Select';

import { FilterCountriesForm } from '@/types';
import styles from './FilterForm.module.scss';

interface FilterFormProps {
  formData: FilterCountriesForm;
  setFormData: Dispatch<React.SetStateAction<FilterCountriesForm>>;
}

const FilterForm = ({ formData, setFormData }: FilterFormProps) => {
  const handleChange = (evt: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    if (evt.target instanceof HTMLInputElement && evt.target.type === 'checkbox') {
      const { name, checked } = evt.target;
      setFormData((prev) => ({ ...prev, [name]: checked }));

      return;
    }

    const { name, value } = evt.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form className={styles.form}>
      <fieldset className={styles.formFieldset}>
        <legend>Sort by</legend>
        <Select
          options={SELECT_OPTIONS}
          selectProps={{ name: 'sortBy', value: formData.sortBy, onChange: handleChange }}
        />
      </fieldset>

      <fieldset className={styles.formFieldset}>
        <legend>Region</legend>
        <div className={styles.formRadioGroup}>
          {RADIOBUTTONS_LIST.map((radio) => {
            const label = radio.value[0].toUpperCase() + radio.value.slice(1);

            return (
              <RadioButton
                key={radio.value}
                labelText={label}
                name={radio.name}
                value={radio.value}
                checked={formData.region === radio.value}
                onChange={handleChange}
              />
            );
          })}
        </div>
      </fieldset>

      <fieldset className={styles.formFieldset}>
        <legend>Status</legend>
        <div className={styles.formCheckboxGroup}>
          <Checkbox
            labelText="Member of the United Nations"
            name="unMember"
            checked={formData.unMember}
            onChange={handleChange}
          />
          <Checkbox
            labelText="Independent"
            name="independent"
            checked={formData.independent}
            onChange={handleChange}
          />
        </div>
      </fieldset>
    </form>
  );
};

export default FilterForm;
