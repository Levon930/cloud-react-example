import React from 'react';
import { useField } from 'formik';
import { FormControl, FormHelperText } from '@material-ui/core';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';

import { ToggleGroupProps } from './ToggleGroup.types';

const ToggleGroup: React.FC<ToggleGroupProps> = ({ items, name, ...props }) => {
  const [field, meta, { setValue }] = useField(name);

  const handleChange = (event: React.MouseEvent<HTMLElement>, newValue: string | null) => {
    setValue(newValue);
  };

  return (
    <FormControl component="fieldset" error={!!meta.error} {...props}>
      <ToggleButtonGroup {...field} exclusive onChange={handleChange}>
        {items.map(({ id, name }) => (
          <ToggleButton key={id} value={id} aria-label="centered">
            {name}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
      <FormHelperText>{meta.error}</FormHelperText>
    </FormControl>
  );
};

export default ToggleGroup;
