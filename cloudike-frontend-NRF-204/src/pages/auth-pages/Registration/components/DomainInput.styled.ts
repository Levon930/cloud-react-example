import { Box, TextField } from '@material-ui/core';

import styled from '@emotion/styled';

const Container = styled(Box)`
  display: grid;
  grid-template-rows: 30% 70%;
  margin-top: 2em;
`;

const DomainContainer = styled(Box)`
  display: grid;
  grid-template-columns: 80% 20%;
`;

const Input = styled(TextField)`
  min-width: 16em;
  height: 40px;
  margin-top: 0.5em;
`;

export const Styled = {
  Container,
  Input,
  DomainContainer,
};
