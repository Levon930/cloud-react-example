import { Box, IconButton, List as MuiList } from '@material-ui/core';

import styled from '@emotion/styled';

const List = styled(MuiList)`
  padding: 0;
  & .active {
    border-radius: 0.5rem;
    background-color: #02c73d;
    color: #fff;
    svg {
      color: #fff;
    }
  }
`;

const ButtonDrower = styled(IconButton)`
  display: flex;
  height: 48px;
  width: 48px;
  align-items: center;
  justify-content: center;
  margin: 4px;
`;

const RightSideBarContainer = styled(Box)`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Styled = {
  ButtonDrower,
  RightSideBarContainer,
  List,
};
