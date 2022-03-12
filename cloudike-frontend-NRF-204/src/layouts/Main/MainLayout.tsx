import React from 'react';
import { Redirect } from 'react-router-dom';

import { UsageStatistics } from '@components/UsageStatistics';
import { useAuth, useToggle } from '@hooks';
import { paths } from '@utils/routes/auth-routes';
import { Header } from './Header';
import { LeftSideBar } from './LeftSideBar';
import { RightSideBar } from './RightSideBar';

import { Styled } from './MainLayout.styled';

const MainLayout: React.FC = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const [openRight, setOpenRight] = useToggle(true);
  const [openLeft, setOpenLeft] = useToggle(true);

  const handleDrawerRight = () => {
    setOpenRight(!openRight);
  };
  const handleDrawerLeft = () => {
    setOpenLeft(!openLeft);
  };

  if (!isAuthenticated) {
    return <Redirect to={paths.login} />;
  }

  return (
    <Styled.MainLayoutContainer>
      <Header />
      <Styled.MainBodyContainer>
        <Styled.MainMenuWrapper>
          <LeftSideBar open={openLeft} handleDrawerLeft={handleDrawerLeft} />
          <UsageStatistics />
        </Styled.MainMenuWrapper>
        <Styled.ChildrenContainer>{children}</Styled.ChildrenContainer>
        <Styled.SideBarDrawer variant="permanent" anchor="right" open={openRight}>
          <RightSideBar open={openRight} handleDrawerRight={handleDrawerRight} />
        </Styled.SideBarDrawer>
      </Styled.MainBodyContainer>
    </Styled.MainLayoutContainer>
  );
};

export default MainLayout;
