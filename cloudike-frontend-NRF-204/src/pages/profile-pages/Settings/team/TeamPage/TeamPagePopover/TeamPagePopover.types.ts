import { Theme } from '@material-ui/core';

type AnchorPosition = { left: number; top: number };

export type TeamPagePopoverProps = Readonly<{
  isOpen: boolean;
  handleToggle: (isOpen: boolean) => void;
  anchorEl?: HTMLButtonElement | null;
  anchorPosition?: AnchorPosition;
  isActive?: boolean;
}>;

export type ItemWrapperPropsType = Readonly<{
  theme?: Theme;
}>;
