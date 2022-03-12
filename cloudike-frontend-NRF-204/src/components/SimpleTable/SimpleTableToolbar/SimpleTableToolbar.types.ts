import { ReactNode } from 'react';

export interface SimpleTableToolbarProps {
  itemsPerPage: number;
  numSelected: number;
  onChange: (value: number) => void;
  toolbarComponent?: ReactNode;
}
