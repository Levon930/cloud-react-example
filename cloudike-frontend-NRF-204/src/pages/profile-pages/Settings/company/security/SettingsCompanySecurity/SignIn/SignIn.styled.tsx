import React from 'react';
import { Box, TooltipProps } from '@material-ui/core';

import { Input, Tooltip as OurTooltip } from '@components';
import styled from '@emotion/styled';
import { InputProps } from './SignIn.types';

const ButtonContainer = styled(Box)`
  display: flex;
  justify-content: flex-end;
`;

const FormInput: React.FC<InputProps> = (props) => (
  <Input {...props} size="small" variant="outlined" />
);

const Container = styled(Box)`
  display: grid;
  width: 50%;
`;

const RadioGroupWrapper = styled(Box)`
  display: flex;
  margin-top: 15px;
  .MuiFormControlLabel-root:first-of-type {
    margin-right: 80px;
  }
  > div:last-of-type {
    margin-top: 27px;
    cursor: pointer;
  }
`;

const CheckboxWrapper = styled(Box)`
  display: flex;
  > div:last-of-type {
    margin-top: 9px;
    cursor: pointer;
  }
`;

const SelectWrapper = styled(Box)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  > div:first-of-type {
    width: 200px;
  }
  > label {
    margin-top: 15px;
  }
`;

const InputWrapper = styled(Box)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  > div:first-of-type {
    width: 60%;
  }
  > div:last-of-type {
    width: 37%;
  }
`;

const ButtonWrapper = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  > div {
    display: flex;
    margin-top: 33px;
    > div:first-of-type {
      margin-left: 5px;
      cursor: pointer;
    }
  }
  > label {
    margin-top: 35px;
  }
`;

const Tooltip: React.FC<TooltipProps> = (props) => <OurTooltip {...props} placement="right" />;

export const Styled = {
  Container,
  ButtonContainer,
  FormInput,
  RadioGroupWrapper,
  Tooltip,
  CheckboxWrapper,
  SelectWrapper,
  InputWrapper,
  ButtonWrapper,
};
