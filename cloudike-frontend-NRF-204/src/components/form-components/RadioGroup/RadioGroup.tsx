import React from 'react';
import { useField } from 'formik';
import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
} from '@material-ui/core';

import { RadioProps } from './RadioGroup.types';

const RadioGroupComponent: React.FC<RadioProps> = ({ items, label, ...props }) => {
  const [field, meta, helpers] = useField(props);

  const handleChange = (event: React.ChangeEvent<HTMLElement>, newValue: string | null) => {
    helpers.setValue(newValue);
  };

  const error = meta.touched && meta.error;

  return (
    <FormControl error={!!error}>
      <FormLabel component="legend">{label}</FormLabel>
      <FormHelperText>{error}</FormHelperText>
      <RadioGroup {...field} onChange={handleChange} row>
        {items.map(({ id, name }) => (
          <FormControlLabel
            key={id}
            value={id}
            className="radio-item"
            control={<Radio />}
            label={name}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default RadioGroupComponent;
