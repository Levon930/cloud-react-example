import { RefObject } from 'react';

export interface usePopoverReturnTypes {
  anchorEl: HTMLButtonElement | null;
  isOpen: boolean;
  handleClick: (event: React.MouseEvent<HTMLButtonElement & MouseEvent>) => void;
  handleClose: () => void;
  element: RefObject<HTMLButtonElement>;
}
