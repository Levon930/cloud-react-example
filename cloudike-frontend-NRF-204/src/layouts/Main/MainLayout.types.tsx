import { Theme } from '@material-ui/core';

export type ContainerPropsType = Readonly<{
  theme?: Theme;
  open?: boolean;
}>;

export type DrawerPropsType = Readonly<{
  theme?: Theme;
  open: boolean;
}>;
