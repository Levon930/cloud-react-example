import React from 'react';
import { useHistory } from 'react-router-dom';

import { paths } from '@utils/routes/profile-routes';
import { paths as settingsPaths } from '@utils/routes/settings-routes';
import { LeftMenuLink, LeftMenuProps } from './MainMenu.types';

import { Styled } from './MainMenu.styled';

/**
 * TODO https://yt.cloudike.io/issue/NRF-210
 */
const MainMenu: React.FC<LeftMenuProps> = ({ menuItems }) => {
  const history = useHistory();

  if (!menuItems || !Array.isArray(menuItems)) return null;
  const isActive = (item: LeftMenuLink) => {
    if (item.path === settingsPaths.companySettingsBasic) {
      return (
        history.location.pathname.includes(`${settingsPaths.companySettingsBasic}`) ||
        history.location.pathname.includes(`${settingsPaths.companySettingsCustom}`) ||
        history.location.pathname.includes(`${settingsPaths.companySettingsSecurity}`)
      );
    }
    if (item.path === settingsPaths.teamMember) {
      return (
        history.location.pathname.includes(`${settingsPaths.teamMember}`) ||
        history.location.pathname.includes(`${settingsPaths.teamGroup}`)
      );
    }
    if (item.path === settingsPaths.profileSettingsBasic) {
      return (
        history.location.pathname.includes(`${settingsPaths.profileSettingsBasic}`) ||
        history.location.pathname.includes(`${settingsPaths.profileSettingsDetailed}`)
      );
    }
    if (item.path === paths.home) {
      return history.location.pathname === `/${paths.home}`;
    }
    if (item.path)
      return (
        history.location.pathname === `/${item.path}` ||
        history.location.pathname === `/${item.path}/`
      );
  };

  return (
    <Styled.ListWrapper>
      {menuItems.map((menuItem) => (
        <Styled.Link key={menuItem.id} to={`/${menuItem.path}`}>
          <Styled.ListItemWrapper isActive={isActive(menuItem)}>
            <Styled.ListItemIconWrapper>{menuItem.icon}</Styled.ListItemIconWrapper>
            <Styled.ListItemTextWrapper primary={menuItem.title} />
          </Styled.ListItemWrapper>
        </Styled.Link>
      ))}
    </Styled.ListWrapper>
  );
};

export default MainMenu;
