import { Box } from '@material-ui/core';

import styled from '@emotion/styled';

const Container = styled(Box)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const LeftSidebarWrapper = styled(Box)`
  padding-top: 20px;
  padding-bottom: 100px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const MainMenu = styled(Box)`
  height: 100%;
  width: 15rem;
`;

export const Styled = {
  Container,
  LeftSidebarWrapper,
  MainMenu,
};
