import { useRef, useState } from 'react';

import { usePopoverReturnTypes } from './usePopover.types';

const usePopover = (): usePopoverReturnTypes => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const isOpen = Boolean(anchorEl);
  const element = useRef<HTMLButtonElement>(null);
  const handleClick = () => {
    setAnchorEl(element.current);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return { anchorEl, isOpen, handleClick, handleClose, element };
};

export default usePopover;
