import React from 'react';
import { IconButton } from '@material-ui/core';
import { MoreHoriz } from '@material-ui/icons';

import { usePopover } from '@hooks';
import { FooterPopover } from '../FooterPopover';

const FooterMoreButton: React.FC = () => {
  const { handleClick, handleClose, isOpen, anchorEl, element } = usePopover();

  return (
    <>
      <IconButton onClick={handleClick} ref={element}>
        <MoreHoriz color="disabled" />
      </IconButton>
      <FooterPopover
        onClose={handleClose}
        isOpen={isOpen}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      />
    </>
  );
};

export default FooterMoreButton;
