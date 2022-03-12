import { Theme } from '@material-ui/core';

export type ListItemWrapperPropsType = Readonly<{
  isActive?: boolean;
  theme?: Theme;
}>;

export type ContainerPropsType = Readonly<{
  theme?: Theme;
  open?: boolean;
}>;

export type DrawerPropsType = Readonly<{
  theme?: Theme;
  open: boolean;
}>;

export type ButtonPropsType = Readonly<{
  theme?: Theme;
  trans: boolean;
}>;
