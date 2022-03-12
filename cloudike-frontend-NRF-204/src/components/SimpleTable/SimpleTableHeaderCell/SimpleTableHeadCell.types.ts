import { ReactNode } from 'react';

import { Sort } from '@api';

export interface SimpleHeaderCell<T = any> {
  label: string;
  id: string;
  width?: string;
  sortable?: boolean;
  renderCell?: (value: T) => ReactNode;
}

export interface SimpleHeaderCellProps extends SimpleHeaderCell {
  onSort?: (sort: Sort) => void;
}
