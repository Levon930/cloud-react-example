import { Box, MenuItem, MenuList } from '@material-ui/core';

import styled from '@emotion/styled';

const MenuContainer = styled(Box)``;

const Menu = styled(MenuList)``;

const Item = styled(MenuItem)`
  .MuiListItemIcon-root {
    min-width: 40px;
  }
`;

const HiddenFileInput = styled.input`
  display: none;
`;

export const Styled = {
  Menu,
  MenuContainer,
  Item,
  HiddenFileInput,
};
