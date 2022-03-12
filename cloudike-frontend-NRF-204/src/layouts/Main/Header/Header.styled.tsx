import React from 'react';
import {
  AppBar as MuiAppBar,
  Avatar,
  Box,
  IconButton,
  TextField,
  Toolbar as MuiToolbar,
  Typography,
} from '@material-ui/core';

import styled from '@emotion/styled';
import { theme } from '@utils';

const AppBar = styled(MuiAppBar)`
  height: 6rem;
  z-index: 2;
  box-shadow: none;
  border-bottom: 1px solid ${theme.palette.grey[500]};
  background-color: white;
  margin: 0;
`;

const Toolbar = styled(MuiToolbar)`
  height: inherit;
  justify-content: space-between;
`;

const LogoWrapper = styled(Box)`
  display: flex;

  a {
    flex: 1;
    display: flex;
  }
`;

const ToolBox = styled(Box)`
  display: flex;
  margin-top: 10px;
  align-items: center;
`;

const NotificationsWrapper = styled(IconButton)`
  margin: 0 25px;
  padding: 10px;
  justify-content: center;
  svg {
    width: 1.5rem;
  }
`;

const AlertDot = styled(Box)`
  ${({ theme }) => `
    position: absolute;
    top: 14px;
    right: 12px;
    padding: 3px;
    background-color: ${theme.palette.yellow[200]};
    border-radius: 50%;
    width: 7px;
    height: 7px;
  `}
`;

const Notifications: React.FC = ({ children }) => {
  return <NotificationsWrapper>{children}</NotificationsWrapper>;
};

const Title = styled(Typography)`
  flex: 1;
`;

const SearchInput = styled(TextField)`
  margin-right: 5px;
  max-width: 255px;

  .MuiInputBase-root {
    input {
      width: 15.625rem;
      padding: 10px;
      font-size: 0.875rem;
    }
  }

  .MuiFormLabel-root {
    transform: translate(5px, 13px) scale(1) rotate(-45deg);
    font-size: 1.56rem;
    padding-top: 4px;
    position: absolute;
  }

  .MuiInputLabel-outlined.MuiInputLabel-shrink {
    transform: translate(9px) scale(0.75) rotate(-45deg);
    padding-top: 0;
  }
`;

const AvatarWrapper = styled(Avatar)`
  ${({ theme }) => `
    background: ${theme.palette.yellow[200]};
    font-weight: 600;
    width: 2rem;
    height: 2rem;
    font-size: 1rem;
    padding-top: 2px;
  `}
`;

export const Styled = {
  AppBar,
  LogoWrapper,
  Title,
  SearchInput,
  Notifications,
  AlertDot,
  AvatarWrapper,
  Toolbar,
  ToolBox,
};
