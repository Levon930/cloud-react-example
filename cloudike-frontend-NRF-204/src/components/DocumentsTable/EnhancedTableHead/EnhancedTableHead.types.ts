import { Theme } from '@material-ui/core';

export type Data = Readonly<{
  name: string;
  size: number;
  date: string;
}>;

export interface HeadCell {
  disablePadding: boolean;
  id: 'path' | 'bytes' | 'modified';
  label: string;
  numeric: boolean;
}

export interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (property: 'path' | 'bytes' | 'modified') => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: 'desc' | 'asc';
  orderBy: string;
  rowCount: number;
  headCells: HeadCell[];
}

export type ItemWrapperPropsType = Readonly<{
  theme?: Theme;
}>;
