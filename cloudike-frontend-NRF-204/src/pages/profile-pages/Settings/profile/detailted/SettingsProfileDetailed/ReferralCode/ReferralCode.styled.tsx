import React from 'react';
import { Box, Button, Input } from '@material-ui/core';

import styled from '@emotion/styled';

const Container = styled(Box)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  & > *:first-child {
    width: 26rem;
  }
`;

const FormInput: React.FC<any> = (props) => (
  <Input {...props} size="small" variant="outlined" disabled />
);

const CopyButton = styled(Button)`
  margin-top: 0;
  margin-left: 5px;
  height: 40px;
`;

export const Styled = {
  Container,
  FormInput,
  CopyButton,
};
