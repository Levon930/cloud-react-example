import { Box, FormControl, InputBase, InputLabel } from '@material-ui/core';

import styled from '@emotion/styled';

const Container = styled(Box)`
  display: grid;
  margin-bottom: 1rem;
`;

const Input = styled(InputBase)`
  input {
    border: 1px solid ${({ theme }) => theme.palette.grey[300]};
  }
`;

const Label = styled(InputLabel)`
  a &.Mui-error {
    position: relative;
  }
`;

const ErrorWrapper = styled.div`
  width: 100%;
`;

const FormControlWrapper = styled(FormControl)``;

export const Styled = {
  Container,
  Input,
  Label,
  ErrorWrapper,
  FormControlWrapper,
};
