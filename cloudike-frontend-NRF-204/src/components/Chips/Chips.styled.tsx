import { Chip as MuiChip, Container } from '@material-ui/core';

import styled from '@emotion/styled';

const ChipsContainer = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 0;
  padding: 0 0 1rem 0;
  overflow-x: auto;
`;

const Chip = styled(MuiChip)`
  margin: 1px;
  background-color: ${({ theme }) => theme.palette.grey[300]};
`;

export const Styled = {
  ChipsContainer,
  Chip,
};
