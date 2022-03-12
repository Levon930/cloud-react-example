import { Box } from '@material-ui/core';

import styled from '@emotion/styled';

const ButtonContainer = styled(Box)`
  display: flex;
  gap: 0.5rem;
  justify-content: flex-end;
`;

const ModalInfo = styled(Box)`
  display: flex;
  max-width: 50vw;
  padding: 10px;
`;

export const Styled = {
  ButtonContainer,
  ModalInfo,
};
