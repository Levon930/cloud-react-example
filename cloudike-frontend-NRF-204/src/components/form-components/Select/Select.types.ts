import { SelectProps as MuiSelectProps } from '@material-ui/core';

export type SelectProps = MuiSelectProps &
  Readonly<{
    name: string;
  }>;
