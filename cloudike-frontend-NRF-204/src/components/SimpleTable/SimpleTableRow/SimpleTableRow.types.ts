import { ChangeEvent } from 'react';

import { SimpleHeaderCell } from '../SimpleTableHeaderCell';

export interface SimpleTableRowProps<T = any> {
  cells: SimpleHeaderCell[];
  hasCheckbox?: boolean;
  row: T;
  keySelector: (row: T) => string;
  onChange?: (event: ChangeEvent<HTMLInputElement>, row: T) => void;
  onClick?: (row: T) => void;
  selected?: boolean;
}
