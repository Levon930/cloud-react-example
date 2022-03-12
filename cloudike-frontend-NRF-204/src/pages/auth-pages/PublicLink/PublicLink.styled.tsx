import { NavLink } from 'react-router-dom';
import {
  AppBar as MuiAppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar as MuiToolbar,
  Typography,
} from '@material-ui/core';

import styled from '@emotion/styled';
import {
  ButtonPropsType,
  ContainerPropsType,
  DrawerPropsType,
  ListItemWrapperPropsType,
} from './PublicLink.types';

const ExpirationWrapper = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: inherit;
  text-align: center;
`;

const ExpirationTitle = styled(Typography)`
  ${({ theme }) => `
  font-size:  ${theme.fontSize.xl};
  color:  ${theme.palette.grey[900]}
`}
`;

const ExpirationText = styled(Typography)`
  ${({ theme }) => `
  color: ${theme.palette.grey[200]};
`}
`;

const EmptyTextWrapper = styled(Box)`
  max-width: 22.5rem;
`;

const AppBar = styled(MuiAppBar)`
  ${({ theme }) => `
  height: 6rem;
  z-index: 2;
  box-shadow: none;
  border-bottom: 1px solid ${theme.palette.grey[500]};
  background-color: ${theme.palette.common.white};
  margin: 0;
`}
`;

const LogoWrapper = styled(Box)`
  display: flex;
`;

const Toolbar = styled(MuiToolbar)`
  height: inherit;
  justify-content: space-between;
`;

const SignButton = styled(Button)<ButtonPropsType>`
  ${({ theme, trans }) => `
  background-color: ${theme.palette.yellow[100]}; 
  height: 2.5rem;
  text-transform: none;
  background-color: ${trans ? 'transparent' : null}
`}
`;

const PublicLinkMenu = styled(Box)`
  ${({ theme }) => `
  height: 100%;
  width: 15rem;
  & svg {
    fill: ${theme.palette.yellow[100]};
  }
`}
`;

const ListWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
`;

const Link = styled(NavLink)`
  text-decoration: none;
`;

const ListItemWrapper = styled(
  (props: ListItemWrapperPropsType) => <ListItem button {...props} />,
  { shouldForwardProp: (prop: string) => prop !== 'isActive' },
)`
  ${({ theme, isActive }) => `
  height: 3rem;
  margin-top: 1rem;
  border-left: 3px solid;
  padding-left: 2rem;
  padding-right: 1rem;
  border-color: transparent;
  color: ${theme.palette.grey[100]};    
  svg {
    fill: ${theme.palette.grey[200]};
  }
  background: ${isActive ? theme.palette.common.white : 'transparent'};
  &:hover {
    color: ${theme.palette.yellow[400]};
    border-color: ${theme.palette.yellow[400]};
    background: ${theme.palette.grey[700]};
    & svg {
      fill: ${theme.palette.yellow[400]};
    };
  }
    
  ${
    isActive &&
    `
  border-color: ${theme.palette.yellow[400]};
  color: ${theme.palette.yellow[400]}; 
  svg {
    fill: ${theme.palette.yellow[400]};
  }        
`
  }
`}
`;

const ListItemIconWrapper = styled(ListItemIcon)`
  margin-right: 1rem;
  width: 1.3rem;
  height: 1.3rem;
`;

const ListItemTextWrapper = styled(ListItemText)`
  ${({ theme }) => `
  & span {
  font-size: ${theme.fontSize.xl};
  }
`}
`;

const ButtonDrower = styled(IconButton)`
  display: flex;
  height: 3rem;
  width: 3rem;
  align-items: center;
  justify-content: center;
  margin: 0.3rem;
`;

const RightSideBarContainer = styled(Box)`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const PublicLinkLayoutContainer = styled(Box)`
  ${({ theme }) => `
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: ${theme.palette.common.white};
`}
`;

const MainBodyContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  height: inherit;
`;

const LayoutContainer = styled(Box)`
  display: flex;
  width: 100%;
  min-height: calc(100vh - 11.2rem);
`;

const MainMenuWrapper = styled(Box)`
  ${({ theme }) => `
  background-color: ${theme.palette.grey[600]};
  display: grid;
`}
`;

const ChildrenContainer = styled(Box)<ContainerPropsType>`
  width: 100%;
  overflow-x: hidden;
  padding: 1.6rem 2.5rem 0;
`;

const SideBarDrawer = styled(Drawer)<DrawerPropsType>`
  display: flex;
  transition: ${({ theme }) =>
    theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    })};
  width: ${({ open }) => (open ? '14rem' : '4.4rem')};
  .MuiDrawer-paper {
    position: relative;
    z-index: 1;
    height: inherit;
    overflow-x: hidden;
    background-color: ${({ theme }) => theme.palette.common.white};
    width: ${({ open }) => (open ? '14rem' : '4.4rem')};
    transition: ${({ theme }) =>
      theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      })};
  }
`;

const UploadWrapper = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  text-align: center;
`;

const UploadTitle = styled(Typography)`
  ${({ theme }) => `
  font-size: ${theme.fontSize.xxl};
  color:  ${theme.palette.grey[100]}
`}
`;

export const assets = {
  expiration: '/assets/expiration.png',
  upload: '/assets/upload.png',
  emptyImage: '/assets/myfolder_empty.svg',
};

const EmptyContainer = styled(Box)`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Emptyimage = styled(Box)`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 18.3rem;
  height: 18.3rem;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${assets.emptyImage});
`;

const EmptyMsg = styled(Typography)`
  line-height: 3.1rem;
  font-size: 1.9rem;
  font-weight: 700;
`;
const EmptySubMsg = styled(Typography)`
  ${({ theme }) => `
  line-height: 2.5rem;
  font-weight: 500;
  color: ${theme.palette.grey[100]};
`}
`;

const ModalWrapper = styled(Box)`
  ${({ theme }) => `
  padding: 1.3rem 1.6rem;
  & input {
    width: 20rem;
    border: 1px solid  ${theme.palette.yellow[100]};
  }
`}
`;

const ModalTitle = styled(Typography)`
  ${({ theme }) => `
  font-size: 1.3rem;
  color:  ${theme.palette.grey[100]};
  margin-bottom: 0.9rem;
`}
`;

const ModalText = styled(Typography)`
  ${({ theme }) => `
  font-size: ${theme.fontSize.lg};
  color:  ${theme.palette.grey[900]};
  margin-bottom: 1.4rem;
`}
`;

const ModalButtonsWrapper = styled(Box)`
  display: flex;
  justify-content: flex-end;
`;

const CancelButton = styled(SignButton)`
  ${({ theme }) => `
  border: 1px solid ${theme.palette.grey[900]};
  margin-right: 0.6rem;
`}
`;

export const Styled = {
  ExpirationWrapper,
  ExpirationTitle,
  ExpirationText,
  AppBar,
  Toolbar,
  SignButton,
  LogoWrapper,
  PublicLinkMenu,
  ListItemTextWrapper,
  ListItemIconWrapper,
  ListItemWrapper,
  Link,
  ListWrapper,
  RightSideBarContainer,
  ButtonDrower,
  SideBarDrawer,
  ChildrenContainer,
  MainMenuWrapper,
  LayoutContainer,
  PublicLinkLayoutContainer,
  MainBodyContainer,
  UploadWrapper,
  UploadTitle,
  EmptyContainer,
  Emptyimage,
  EmptyMsg,
  EmptySubMsg,
  EmptyTextWrapper,
  ModalWrapper,
  ModalTitle,
  ModalText,
  ModalButtonsWrapper,
  CancelButton,
};
