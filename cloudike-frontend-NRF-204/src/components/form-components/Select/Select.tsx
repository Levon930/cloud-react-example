import React from 'react';
import { ErrorMessage, useField } from 'formik';
import { FormControl, FormHelperText } from '@material-ui/core';

import { SelectProps } from './Select.types';

import { Styled } from './Select.styled';

/**
 * TODO: remove styled file, add styles to overrides theme.
 */
const Select: React.FC<SelectProps> = ({ name, ...props }) => {
  const [field, meta] = useField(name);
  const hasError = !!(meta.touched && meta.error);

  return (
    <FormControl error={hasError}>
      <Styled.Select {...props} {...field} />

      <ErrorMessage
        component={({ children }) => <FormHelperText>{children}</FormHelperText>}
        name={name}
      />
    </FormControl>
  );
};

export default Select;
