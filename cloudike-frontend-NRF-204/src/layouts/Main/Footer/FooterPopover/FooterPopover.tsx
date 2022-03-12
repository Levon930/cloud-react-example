import React, { lazy } from 'react';
import { CircularProgress, Divider } from '@material-ui/core';

import { Popover, PopoverMenu } from '@components/Popover';
import { useConstants } from './FooterPopover.constants';
import { FooterPopoverProps } from './FooterPopover.types';

const LanguageSelect = lazy(() =>
  import('@components/LanguageSelect').then((module) => ({ default: module.LanguageSelect })),
);

const FooterPopover: React.FC<FooterPopoverProps> = ({ onClose, isOpen, anchorEl }) => {
  const links = useConstants();

  return (
    <Popover anchorEl={anchorEl} isOpen={isOpen} onClose={onClose}>
      <>
        <PopoverMenu links={links} isOpen={isOpen} onClose={onClose} />
        <Divider />
        <React.Suspense fallback={<CircularProgress disableShrink />}>
          <LanguageSelect />
        </React.Suspense>
      </>
    </Popover>
  );
};

export default FooterPopover;
