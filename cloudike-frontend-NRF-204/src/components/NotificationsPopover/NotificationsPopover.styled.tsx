import { Box, Button, Link, List, ListItemIcon, Typography } from '@material-ui/core';

import styled from '@emotion/styled';
import { theme } from '@utils';
import { ItemWrapperPropsType } from './NotificationsPopover.types';

const ListWrapper = styled(List)<ItemWrapperPropsType>`
  ${({ theme }) => `
  max-width: 440px;
  box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.07);
  border-radius: 2px;
  border: 1px solid ${theme.palette.grey[300]};
  padding: 0;
  `}
`;

const ListItemWrapper = styled.div<ItemWrapperPropsType>`
  ${({ theme }) => `
  width: 100%;
  padding: 23px 21px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${theme.palette.grey[300]};
  &:last-child {
    border-bottom: none;
  }
  `}
`;

const ListItemIconWrapper = styled(ListItemIcon)<ItemWrapperPropsType>`
  ${({ theme }) => `
  min-width: 5%;
  & svg {
    width: 17px;
    height: 16px;
    fill: ${theme.palette.grey[200]};
    margin-right: 10px;
  }
  `}
`;

const ListItemInfo = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
`;

const NotificationText = styled(Typography)`
  line-height: initial;
  text-transform: initial;
`;

const NotificationDate = styled(Typography)`
  line-height: 10px;
`;

const Actions = styled.div`
  width: 45%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const ButtonWrapper = styled(Button)<ItemWrapperPropsType>`
  ${({ theme, accept, accepted }) => {
    const bgColor = () => {
      if (accepted) {
        return theme.palette.grey[300];
      }
      if (accept) {
        return theme.palette.yellow[100];
      }

      return theme.palette.common.white;
    };

    return `background-color: ${bgColor()};
    margin-right: ${accept ? ' 5px' : ' 0'};
    height: 23px;
    border-radius: 2px;
    color: ${theme.palette.grey[100]};
    font-size: 12px;
    font-weight: 400;
    border: ${accept ? ' none' : ' 1px solid #ccc'};
    box-shadow: unset;
  `;
  }}
`;

const StatusWrapper = styled(Box)`
  background-color: ${theme.palette.grey[300]};
  margin-right: 5px;
  padding: 3px 10px;
  border-radius: 2px;
  color:${theme.palette.grey[100]}
  font-size: 12px;
  font-weight: 400;
  border: 1px solid #ccc;
`;

const NotificationsEmpty = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DocumentLink = styled(Link)`
  cursor: pointer;
  &:hover {
    text-decoration: none;
  }
`;

export const Styled = {
  ListWrapper,
  ListItemWrapper,
  ListItemIconWrapper,
  ListItemInfo,
  Actions,
  NotificationText,
  NotificationDate,
  ButtonWrapper,
  StatusWrapper,
  DocumentLink,
  NotificationsEmpty,
};
