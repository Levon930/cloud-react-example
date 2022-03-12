import { Theme } from '@material-ui/core';

import { Maybe, Thumbnail } from '@api';

export type ItemWrapperPropsType = Readonly<{
  theme?: Theme;
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

export type Extradata = {
  thumbnails?: Maybe<{
    middle?: Maybe<Pick<Thumbnail, 'link'>>;
    preview?: Maybe<Pick<Thumbnail, 'link'>>;
    small?: Maybe<Pick<Thumbnail, 'link'>>;
  }>;
};

export interface Document {
  type: string;
  path: string;
  bytes: number;
  modified: string;
  extradata?: Extradata;
  isFavorite: boolean;
}

export interface File {
  path: string;
  size: number;
}

export enum DocTypes {
  documentFolder = 'DocumentFolder',
  documentFile = 'DocumentFile',
}

export type handleOpenArgs = {
  path: string;
  type: string;
  bytes?: number;
  modified?: string;
  extradata?: Extradata;
};
