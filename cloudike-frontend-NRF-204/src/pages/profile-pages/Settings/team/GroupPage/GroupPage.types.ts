import { Theme } from '@material-ui/core';

export type ItemWrapperPropsType = Readonly<{
  theme?: Theme;
}>;

export enum HeaderId {
  name = 'name',
  users = 'users',
  detailed_authority = 'detailed_authority',
}

export interface HeadCell {
  disablePadding: boolean;
  id: HeaderId;
  label: string;
  numeric: boolean;
}

export interface EnhancedTableToolbarProps {
  numSelected: number;
}

export enum SortBy {
  name = 'name',
  users = 'users',
}

export enum Order {
  desc = 'desc',
  asc = 'asc',
}

export interface SelectedGroup {
  name?: string | null;
  group_id?: number | null;
}
