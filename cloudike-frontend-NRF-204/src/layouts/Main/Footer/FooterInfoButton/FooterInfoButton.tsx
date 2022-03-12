import React from 'react';
import { IconButton } from '@material-ui/core';
import { Info as InfoIcon } from '@material-ui/icons';

import { usePopover } from '@hooks';
import { InfoPopover } from '../FooterInfoPopover';

const FooterInfoButton: React.FC = () => {
  const { handleClick, handleClose, isOpen, anchorEl, element } = usePopover();

  return (
    <>
      <IconButton onClick={handleClick} ref={element}>
        <InfoIcon color="disabled" />
      </IconButton>
      <InfoPopover
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

export default FooterInfoButton;
