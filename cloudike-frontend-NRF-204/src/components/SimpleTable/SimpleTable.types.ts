import { FC, ReactNode } from 'react';

import { CommonListInput } from '@api';
import { SimpleHeaderCellProps } from './SimpleTableHeaderCell';

export interface ISimpleRowsProps {
  content: ReactNode;
  id: string;
  align?: string;
}

export interface SimpleTableProps<T> {
  headers: SimpleHeaderCellProps[];
  rows: T[];
  hasCheckbox?: boolean;
  keySelector: (value: T) => string;
  // TODO: rename method change sort/pagination/itemsPerPage
  onChangeTable: (input: CommonListInput) => void;
  onChangeSelected?: (values: T[]) => void;
  toolbarComponent?: FC;
  // TODO implement in table component
  popoverComponent?: FC<{ row: T }>;
}
