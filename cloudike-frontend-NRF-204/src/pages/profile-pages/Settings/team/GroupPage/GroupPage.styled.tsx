import React from 'react';
import { Box, Table, TableRow } from '@material-ui/core';
import {
  AddBoxRounded,
  CloudDownload as MuiCloudDownload,
  IndeterminateCheckBoxRounded,
  PhoneIphone as MuiPhoneIphone,
  Print as MuiPrint,
  Web as MuiWeb,
} from '@material-ui/icons';

import styled from '@emotion/styled';
import { ItemWrapperPropsType } from './GroupPage.types';

const Container = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 200px;
`;

const Description = styled(Box)`
  text-align: center;
  font-size: 18px;
  margin: 20px 0;
`;

const TableComponent = styled(Table)`
  width: 100%;
  overflow: hidden;
  margin-top: 1rem;
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

const UsersConainer = styled(Box)`
  display: flex;
  align-items: center;
`;

const PlusIcon: React.FC = () => <AddBoxRounded color="primary" />;

const MinusIcon = styled(IndeterminateCheckBoxRounded)`
  color: ${({ theme }) => `${theme.palette.grey[200]};`};
`;

const Print = styled(MuiPrint)`
  color: ${({ theme }) => `${theme.palette.grey[200]};`};
`;

const CloudDownload = styled(MuiCloudDownload)`
  color: ${({ theme }) => `${theme.palette.grey[200]};`};
`;

const PhoneIphone = styled(MuiPhoneIphone)`
  color: ${({ theme }) => `${theme.palette.grey[200]};`};
`;

const Web = styled(MuiWeb)`
  color: ${({ theme }) => `${theme.palette.grey[200]};`};
`;

const PlusMinus = styled(Box)`
  display: flex;
  .MuiSvgIcon-root {
    cursor: pointer;
  }
`;

export const Styled = {
  Container,
  Description,
  IconsBox,
  Row,
  TableComponent,
  UsersConainer,
  PlusMinus,
  PlusIcon,
  MinusIcon,
  Web,
  CloudDownload,
  Print,
  PhoneIphone,
};
