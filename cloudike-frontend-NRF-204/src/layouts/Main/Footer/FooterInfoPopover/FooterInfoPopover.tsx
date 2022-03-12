import React from 'react';

import { Popover, PopoverMenu } from '@components/Popover';
import { useConstants } from './FooterInfoPopover.constants';
import { InfoPopoverProps } from './FooterInfoPopover.types';

/**
 * TODO move to footerInfoPopover
 */
const FooterInfoPopover: React.FC<InfoPopoverProps> = ({ onClose, isOpen, anchorEl }) => {
  const links = useConstants();

  return (
    <Popover anchorEl={anchorEl} isOpen={isOpen} onClose={onClose}>
      <PopoverMenu links={links} isOpen={isOpen} onClose={onClose} />
    </Popover>
  );
};

export default FooterInfoPopover;
