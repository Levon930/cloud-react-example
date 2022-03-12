import React from 'react';
import { Box } from '@material-ui/core';

import { Input as OurInput } from '@components';
import styled from '@emotion/styled';
import { InputProps } from './DeleteAccountModal.types';

const ModalFormWrapper = styled(Box)`
  padding: 5px;
`;

const StyledInput = styled(OurInput)`
  width: 550px;
`;

const Input: React.FC<InputProps> = (props) => (
  <StyledInput {...props} size="small" variant="outlined" />
);

const ButtonsWrapper = styled(Box)`
  display: flex;
  justify-content: flex-end;
  > button {
    margin: 5px;
    width: 150px;
  }
`;

export const Styled = {
  ModalFormWrapper,
  Input,
  ButtonsWrapper,
};
