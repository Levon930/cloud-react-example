import React from 'react';
import { ErrorMessage, useField } from 'formik';
import { FormHelperText } from '@material-ui/core';

import { InputProps } from './Input.types';

import { Styled } from './Input.styled';
/**
 * TODO: try to use TextField from material-ui
 */
const Input: React.FC<InputProps> = ({ name, label, minDate = '', maxDate = '', ...props }) => {
  const [field, meta] = useField(name);
  const hasError = !!(meta.touched && meta.error);

  return (
    <Styled.FormControlWrapper fullWidth={props.fullWidth} error={hasError}>
      <Styled.Label shrink htmlFor={name}>
        {label}
      </Styled.Label>
      <Styled.Input
        id={name}
        aria-describedby={name}
        {...props}
        {...field}
        inputProps={{ min: minDate, max: maxDate }}
      />
      <ErrorMessage
        component={({ children }) => <FormHelperText>{children}</FormHelperText>}
        name={name}
      />
    </Styled.FormControlWrapper>
  );
};

export default Input;
