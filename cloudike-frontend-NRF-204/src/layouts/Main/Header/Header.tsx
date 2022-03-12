import React from 'react';
import { Box } from '@material-ui/core';

import { NotificationsType, useAccountBasicSettingsQuery, useNotificationsQuery } from '@api';
import { LinkRouter } from '@components/LinkRouter';
import { NotificationsPopover } from '@components/NotificationsPopover';
import { usePopover } from '@hooks';
import { paths } from '@utils/routes/profile-routes';
import AlarmIcon from 'components/SvgComponents/AlarmIcon';
import { ProfilePopover } from './ProfilePopover';

import { Styled } from './Header.styled';

const Header: React.FC = () => {
  const { handleClick, handleClose, isOpen, anchorEl, element } = usePopover();
  const {
    handleClick: handleNotificationsIconClick,
    handleClose: handleNotificationsPopoverClose,
    isOpen: isNotificationsPopoverOpen,
    anchorEl: notificationsAnchorEl,
    element: notificationsElement,
  } = usePopover();
  const { data: accountData } = useAccountBasicSettingsQuery();
  const { data: allNotif } = useNotificationsQuery({
    variables: {
      type: NotificationsType.All,
    },
  });
  const { data: newNotif } = useNotificationsQuery({
    variables: {
      type: NotificationsType.New,
    },
  });
  const notifications = allNotif ? [...allNotif.notifications] : [];
  const newNotifications = newNotif ? [...newNotif.notifications] : [];
  const userInitial = accountData?.getUser.name.slice(0, 1) || 'CL';

  return (
    <Styled.AppBar position="sticky" color="default">
      <Styled.Toolbar>
        <Styled.LogoWrapper px={2}>
          <LinkRouter to={paths.home}>
            <img src="/assets/logo.png" alt="logo" />
          </LinkRouter>
        </Styled.LogoWrapper>
        <Styled.ToolBox>
          <Styled.SearchInput label="⚲" name="search" variant="outlined" />
          <Box ref={notificationsElement} onClick={handleNotificationsIconClick}>
            <Styled.Notifications>
              <AlarmIcon />
              {!!newNotifications.length && <Styled.AlertDot />}
            </Styled.Notifications>
          </Box>
          <Box ref={element} onClick={handleClick}>
            <Styled.AvatarWrapper>{userInitial}</Styled.AvatarWrapper>
          </Box>
        </Styled.ToolBox>
        <NotificationsPopover
          isOpen={isNotificationsPopoverOpen}
          handleToggle={handleNotificationsPopoverClose}
          anchorEl={notificationsAnchorEl}
          notifications={notifications}
        />
        <ProfilePopover
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
      </Styled.Toolbar>
    </Styled.AppBar>
  );
};

export default Header;
