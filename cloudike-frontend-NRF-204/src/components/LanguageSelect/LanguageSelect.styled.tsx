import { Box } from '@material-ui/core';

import styled from '@emotion/styled';

const SelectContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  & svg {
    margin-right: 5px;
    width: 21px;
    height: 21px;
  }
`;

export const Styled = {
  SelectContainer,
};
