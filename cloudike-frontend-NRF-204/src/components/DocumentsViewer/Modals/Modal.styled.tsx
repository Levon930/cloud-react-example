import { Box, Container } from '@material-ui/core';

import styled from '@emotion/styled';

const ButtonContainer = styled(Container)`
  display: flex;
  gap: 0.5rem;
  justify-content: flex-end;
  padding: 0;
`;

const ModalContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  width: 37rem;
  padding: 0;
`;

const ModalFromContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0;
`;

const ModalDescription = styled(Box)`
  margin: 16px 0;
`;

const CreateFolderModalInput = styled(Box)`
  .MuiFormControl-root {
    width: 100%;
  }
  margin: 1rem 0;
`;

export const Styled = {
  ButtonContainer,
  ModalContainer,
  ModalFromContainer,
  ModalDescription,
  CreateFolderModalInput,
};
