import React from 'react';
import { Box } from '@material-ui/core';

import { Input } from '@components';
import styled from '@emotion/styled';
import { InputProps } from './SetPassword.types';

const ButtonWrapper = styled(Box)`
  display: flex;
  justify-content: flex-end;
`;

const FormInput: React.FC<InputProps> = (props) => (
  <Input {...props} size="small" variant="outlined" />
);

const Container = styled(Box)`
  display: grid;
  width: 40%;
`;

// const Button: React.FC<ButtonProps> = ({ children, ...props }) => (
//   <ReusableButton {...props} color="primary" variant="contained">
//     {children}
//   </ReusableButton>
// );

export const Styled = {
  Container,
  ButtonWrapper,
  FormInput,
};
