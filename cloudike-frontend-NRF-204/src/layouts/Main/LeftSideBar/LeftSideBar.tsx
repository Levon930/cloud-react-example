import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { LeftMenu } from '@components/MainMenu';
import { useConstants } from './LeftSideBarMenu.constants';

import { Styled } from './LeftSideBar.styled';

const LeftSideBar: React.FC<{ open: boolean; handleDrawerLeft: () => void }> = () => {
  const { mainMenu, settingsMenu } = useConstants();

  return (
    <Styled.MainMenu>
      <Switch>
        <Route path="/settings" render={() => <LeftMenu menuItems={settingsMenu} />} />
        <Route path="/" render={() => <LeftMenu menuItems={mainMenu} />} />
      </Switch>
    </Styled.MainMenu>
  );
};

export default LeftSideBar;
