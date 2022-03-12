import { Theme } from '@material-ui/core';

import { CompanyList } from '@api';

export type ItemWrapperPropsType = Readonly<{
  theme?: Theme;
}>;

export interface HeadCell {
  disablePadding: boolean;
  id: keyof CompanyList | 'detailed_authority';
  label: string;
  numeric: boolean;
}

export interface EnhancedTableToolbarProps {
  numSelected: number;
}

export interface Props {
  tab: number;
  selected: number[];
  setSelected: React.Dispatch<React.SetStateAction<[] | number[]>>;
  groupId: number;
}
