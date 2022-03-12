import React from 'react';
import { Box, Grid, GridProps, Typography } from '@material-ui/core';

import styled from '@emotion/styled';

const Container = styled(Grid)`
  padding: 0.5rem 1rem;
`;

const ProgressText: React.FC<GridProps> = (props) => (
  <Box mb={1} mt={2}>
    <Grid container item alignContent="center" direction="row" {...props} />
  </Box>
);

const ProgressBarWrapper = styled(Box)`
  ${({ theme }) => `
    & > div {
      box-shadow: inset 0 1px 4px ${theme.palette.grey[200]}, 0 1px ${theme.palette.grey[700]};
      height: 0.5rem;
      background: transparent;
      border-radius: 4px;
    }
    div div {
      background: linear-gradient(to right, ${theme.palette.yellow[100]} 40%, ${theme.palette.yellow[500]});
      box-shadow: inset 0 1px 4px ${theme.palette.grey[200]}, 0 1px ${theme.palette.grey[700]};
      border-radius: 4px;
    }
  `}
`;

const ImageWrapper = styled(Box)`
  display: flex;
  margin-right: 7px;
  svg {
    width: 1.25rem;
  }
`;

const progressTextInner = styled(Box)`
  ${({ theme }) => `
  display: flex;
  p {
    font-size: 0.7rem;
    &:nth-of-type(1) {
      color:${theme.palette.grey[200]};
      margin-right: 5px;
    }
  `}
`;

const ProgressTitle = styled(Typography)`
  ${({ theme }) => `
    margin-right: 5px;
    font-size: 0.7rem;
    color: ${theme.palette.grey[200]};
  `}
`;

export const Styled = {
  Container,
  ProgressText,
  ProgressBarWrapper,
  ImageWrapper,
  progressTextInner,
  ProgressTitle,
};
