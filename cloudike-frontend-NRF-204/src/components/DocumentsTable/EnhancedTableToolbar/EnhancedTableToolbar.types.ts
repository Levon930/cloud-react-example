import { Theme } from '@material-ui/core';

export type ItemWrapperPropsType = Readonly<{
  theme?: Theme;
}>;

export interface EnhancedTableToolbarProps {
  numSelected: number;
  expanded: boolean;
  rowsPerPage: number;
  handleChangeRowsPerPage: (
    event: React.ChangeEvent<{ name?: string | undefined; value: unknown }>,
  ) => void;
  handleGoMainFolder: () => void;
  setPage: (s: number) => number | void;
}
