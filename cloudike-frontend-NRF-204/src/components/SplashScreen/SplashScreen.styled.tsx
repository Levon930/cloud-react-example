import { Box, Typography } from '@material-ui/core';

import styled from '@emotion/styled';

const Container = styled(Box)`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
`;

const SplashScreenText = styled(Typography)`
  font-size: 1.5rem;
`;

const SplashScreenContainer = styled(Box)`
  margin: 0 auto;
`;

export const Styled = {
  Container,
  SplashScreenText,
  SplashScreenContainer,
};
