import { NavLink } from 'react-router-dom';
import { MenuItem, MenuList } from '@material-ui/core';

import styled from '@emotion/styled';

const MenuListWrapper = styled(MenuList)`
  padding: 0;
`;

const MenuItemWrapper = styled(MenuItem)`
  ${({ theme }) => `
    color: ${theme.palette.grey[200]};
    fontSize: 12px;
    fontWeight: 400;
    lineHeight: 30px;
    textAlign: left;
    letterSpacing: -0.3px;
    padding: 10px 13px;
    &:hover {
      color: ${theme.palette.grey[100]};
      & svg {
        fill: ${theme.palette.grey[100]};
      };
    }
  `}
`;

const Link = styled(NavLink)`
  text-decoration: none;
`;

export const Styled = {
  MenuListWrapper,
  MenuItemWrapper,
  Link,
};
