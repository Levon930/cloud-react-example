import { NavLink } from 'react-router-dom';
import { Box, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

import { ListItemWrapperPropsType } from '@components/MainMenu';
import styled from '@emotion/styled';

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
    background: ${isActive ? '#fff' : 'transparent'};
    &:hover {
      background: transparent;
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
  margin-right: 16px;
  min-width: 0;
  & svg {
    width: 21px;
    height: 21px;
  }
`;

const ListItemTextWrapper = styled(ListItemText)`
  & span {
    font-size: 18px;
    font-weight: 400;
  }
`;

const ListWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
`;

export const Styled = {
  Link,
  ListItemWrapper,
  ListItemIconWrapper,
  ListItemTextWrapper,
  ListWrapper,
};
