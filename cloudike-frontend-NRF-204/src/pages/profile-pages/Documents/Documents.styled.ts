import { Box, Typography } from '@material-ui/core';

import styled from '@emotion/styled';

export const assets = {
  emptyImage: '/assets/myfolder_empty.svg',
};

const Container = styled(Box)``;

const EmptyContainer = styled(Box)`
  margin-top: 10em;
  text-align: center;
`;

const Emptyimage = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 20em;
  height: 20em;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${assets.emptyImage});
`;

const EmptyMsg = styled(Typography)`
  line-height: 50px;
  font-size: 30px;
  font-weight: 700;
`;
const EmptySubMsg = styled(Typography)`
  line-height: 40px;
  font-weight: 500;
  color: grey;
`;

export const Styled = {
  Container,
  EmptyContainer,
  Emptyimage,
  EmptyMsg,
  EmptySubMsg,
};
