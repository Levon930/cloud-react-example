/* eslint-disable prettier/prettier */
import { ChangeEvent } from 'react';
import { CheckboxProps as MuiCheckboxProps } from '@material-ui/core';

export type CheckboxWithLabelProps = MuiCheckboxProps & {
  name: string;
  label: string;
  labelPlacement?: 'top' | 'end' | 'start' | 'bottom';
  onChange?:(event: ChangeEvent<HTMLInputElement>)=>void 
};
