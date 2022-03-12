import React from 'react';
import { Divider } from '@material-ui/core';

import { Popover, PopoverMenu } from '@components/Popover';
import { Logout } from './Logout';
import { useConstants } from './ProfilePopover.constants';
import { ProfilePopoverProps } from './ProfilePopover.types';
import { ProfilePopoverHeader } from './ProfilePopoverHeader';

const ProfilePopover: React.FC<ProfilePopoverProps> = ({
  onClose,
  isOpen,
  anchorEl,
  user = { plan: '', avatar: '', email: '', name: '' },
}) => {
  const links = useConstants();

  return (
    <Popover
      margin={{ left: '', top: '50px', right: '0', bottom: '0' }}
      anchorEl={anchorEl}
      isOpen={isOpen}
      onClose={onClose}
    >
      <>
        <ProfilePopoverHeader user={user} />
        <Divider />
        <PopoverMenu links={links} isOpen={isOpen} onClose={onClose} />
        <Divider />
        <Logout />
      </>
    </Popover>
  );
};

export default ProfilePopover;
