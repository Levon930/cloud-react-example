import { Theme } from '@material-ui/core';

import { CompanyList } from '@api';

export interface HeadCell {
  disablePadding: boolean;
  id: keyof CompanyList | 'detailed_authority';
  label: string;
  numeric: boolean;
}

export interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (property: keyof CompanyList) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: 'desc' | 'asc';
  orderBy: string;
  rowCount: number;
  headCells: HeadCell[];
}

export type ItemWrapperPropsType = Readonly<{
  theme?: Theme;
}>;
