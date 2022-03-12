import { Box, Drawer } from '@material-ui/core';

import styled from '@emotion/styled';
import { theme } from '@utils';
import { ContainerPropsType, DrawerPropsType } from './MainLayout.types';

const MainLayoutContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: white;
`;

const MainBodyContainer = styled(Box)<ContainerPropsType>`
  display: flex;
  justify-content: space-between;
  height: inherit;
`;

const ChildrenContainer = styled(Box)<ContainerPropsType>`
  width: 100%;
  overflow-x: hidden;
  padding: 25px 40px 0;
`;

const SideBarDrawer = styled(Drawer)<DrawerPropsType>`
  display: flex;
  transition: ${({ theme }) =>
    theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    })};
  width: ${({ open }) => (open ? '225px' : '70px')};
  .MuiDrawer-paper {
    position: relative;
    z-index: 1;
    height: inherit;
    overflow-x: hidden;
    background-color: white;
    width: ${({ open }) => (open ? '225px' : '70px')};
    transition: ${({ theme }) =>
      theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      })};
  }
`;

const MainMenuWrapper = styled(Box)`
  background-color: ${theme.palette.grey[600]};
  display: grid;
`;

export const Styled = {
  MainLayoutContainer,
  ChildrenContainer,
  MainBodyContainer,
  SideBarDrawer,
  MainMenuWrapper,
};
