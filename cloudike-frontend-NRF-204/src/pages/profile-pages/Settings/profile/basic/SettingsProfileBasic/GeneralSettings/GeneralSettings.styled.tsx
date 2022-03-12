import React from 'react';
import { Box } from '@material-ui/core';

import { Input } from '@components';
import styled from '@emotion/styled';
import { InputProps } from './GeneralSettings.types';

const ButtonWrapper = styled(Box)`
  display: flex;
  justify-content: flex-end;
`;

const Container = styled(Box)`
  display: grid;
  width: 40%;
`;

const FormInput: React.FC<InputProps> = (props) => (
  <Input {...props} size="small" variant="outlined" />
);

export const Styled = {
  Container,
  ButtonWrapper,
  FormInput,
};
