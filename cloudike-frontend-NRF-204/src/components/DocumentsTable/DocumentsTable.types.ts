import { BoxProps, Theme } from '@material-ui/core';

import { Extradata } from '@components';

export interface DocumentsTableProps {
  toolbar?: boolean;
  popover?: boolean;
  rows: Document[];
  handleGoMainFolder: () => void;
  handleOpen: (doc: Document) => () => void;
  handleChange: (files: File[]) => void;
  itemsTotal: number;
}

export type ItemWrapperPropsType = Readonly<{
  theme?: Theme;
  emptyRows?: number;
}>;

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

export interface EnhancedTableToolbarProps {
  numSelected: number;
}

export interface Document {
  type: string;
  path: string;
  bytes: number;
  modified: string;
  extradata?: Extradata;
  isFavorite: boolean;
}

export type FavoriteIconProps = BoxProps & {
  isFavorite: boolean;
};
