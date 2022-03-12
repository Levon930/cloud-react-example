import { Box, Container } from '@material-ui/core';

import styled from '@emotion/styled';

const ModalItem = styled(Box)`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 1rem 0;
  > div > div {
    margin: 0;
  }
`;

const ButtonContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  padding: 0;
`;

export const DeleteMemberStyled = { ModalItem, ButtonContainer };
