import { InputBaseProps, TextFieldProps } from '@material-ui/core';

export type InputProps = TextFieldProps &
  InputBaseProps &
  Readonly<{
    name: string;
    label?: string;
    minDate?: string;
    maxDate?: string;
  }>;
