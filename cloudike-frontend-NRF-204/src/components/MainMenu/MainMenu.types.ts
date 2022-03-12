import { Theme } from '@material-ui/core';

export type LeftMenuLink = Readonly<{
  title: string;
  icon: JSX.Element;
  path: string;
  id: number;
  info?: string;
  infoIcon?: JSX.Element;
}>;

export type LeftMenuProps = Readonly<{
  menuItems: LeftMenuLink[];
}>;

export type ListItemWrapperPropsType = Readonly<{
  isActive?: boolean;
  theme?: Theme;
}>;
