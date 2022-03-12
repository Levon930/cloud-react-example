import { Box, TextField } from '@material-ui/core';

import styled from '@emotion/styled';

const Container = styled(Box)``;

const FormContainer = styled(Box)`
  display: grid;
`;

const InputWrapper = styled(Box)`
  display: flex;
  align-items: center;

  .MuiFormControl-root {
    width: 70%;
  }
`;

const DomainText = styled.div`
  width: 30%;
  padding-left: 10px;
  padding-top: 8px;
`;

const Input = styled(TextField)``;

const ButtonWrapper = styled(Box)`
  display: flex;
  justify-content: flex-end;
`;

export const Styled = {
  Container,
  Input,
  InputWrapper,
  DomainText,
  FormContainer,
  ButtonWrapper,
};
