import { Sort } from '@api';
import { SimpleHeaderCell } from '../SimpleTableHeaderCell';

export interface SimpleTableHeadProps {
  headCells: SimpleHeaderCell[];
  onChangeSort: (sort: Sort) => void;
  onSelectAll: (checked: boolean) => void;
  hasCheckbox?: boolean;
  indeterminate?: boolean;
}
