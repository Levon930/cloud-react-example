import React from 'react';
import { Checkbox as MuiCheckbox, CheckboxProps, TableRow } from '@material-ui/core';

import styled from '@emotion/styled';
import { ItemWrapperPropsType } from './EnhancedTableHead.types';

const Row = styled(TableRow)<ItemWrapperPropsType>`
  &.Mui-selected {
    ${({ theme }) => `
  background-color: ${theme.palette.primaryWithOpacity[200]};
`}
  }
  &.Mui-selected:hover {
    ${({ theme }) => `
  background-color: ${theme.palette.primaryWithOpacity[400]};
`}
  }
`;

const Checkbox: React.FC<CheckboxProps> = (props) => <MuiCheckbox {...props} color="primary" />;

const VisuallyHidden = styled.span`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0px;
  position: absolute;
  top: 20px;
  width: 1px;
`;

export const Styled = {
  Row,
  VisuallyHidden,
  Checkbox,
};
