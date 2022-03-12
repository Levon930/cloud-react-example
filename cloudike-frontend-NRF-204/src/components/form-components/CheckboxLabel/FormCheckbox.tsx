/* eslint-disable prettier/prettier */
/* eslint-disable no-console */
import React from 'react';
import { useField } from 'formik';
import { Checkbox, FormControlLabel } from '@material-ui/core';

import { CheckboxWithLabelProps } from './FormCheckbox.types';

const FormCheckbox: React.FC<CheckboxWithLabelProps> = ({ name, label, labelPlacement, value,onChange }) => {
  const [{ ...field }] = useField(name);

  return (
    <FormControlLabel
      control={<Checkbox {...field} value={value}   onChange={onChange} />}
      label={label}
      labelPlacement={labelPlacement}
    />
  );
};

export default FormCheckbox;
