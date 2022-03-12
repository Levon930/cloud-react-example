import React from 'react';
import {
  Box,
  Checkbox as MuiCheckbox,
  CheckboxProps,
  CircularProgress,
  Table,
  TableContainer,
  TableRow,
} from '@material-ui/core';

import styled from '@emotion/styled';
import { ItemWrapperPropsType } from './MembersTable.types';

const TableComponent = styled(Table)`
  width: 100%;
  overflow: hidden;
  margin-top: 1rem;
`;

const CircularLoading = styled(CircularProgress)`
  svg {
    width: 40px;
    height: 40px;
  }
`;

const Container = styled(TableContainer)`
  overflow-y: hidden;
`;

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

const IconsBox = styled(Box)`
  > svg {
    width: 20px;
    height: 20px;
    margin: 5px;
  }
`;

const Checkbox: React.FC<CheckboxProps> = (props) => <MuiCheckbox {...props} color="primary" />;

export const Styled = {
  TableComponent,
  Row,
  IconsBox,
  CircularLoading,
  Container,
  Checkbox,
};
