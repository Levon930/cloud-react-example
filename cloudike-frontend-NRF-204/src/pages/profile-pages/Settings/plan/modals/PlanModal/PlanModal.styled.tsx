import React from 'react';
import {
  Box,
  Button,
  Radio as MuiRadio,
  RadioProps,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@material-ui/core';

import styled from '@emotion/styled';
import { InquireProps } from './PlanModal.types';

const Column = styled(TableCell)`
  border-bottom: none;
`;

const Head = styled(TableHead)<InquireProps>`
  ${({ theme }) => `
  font-size: 16px;
    & p {
    font-size: 14px;
  }
  & a {
    text-decoration: none;
    color: ${theme.palette.grey[100]}
  }
  & th {
    border: none;
    padding-bottom: 18px;
    :first-of-type {
      padding-left: 0;
    }
  `}
`;

const Row = styled(TableRow)`
  font-size: 0.8rem;
`;

const PriceTypography = styled(Typography)`
  padding: 10px 0;
`;

const Title = styled(Typography)`
  font-size: 1.25rem;
`;

const TableContent = styled(TableBody)`
  ${({ theme }) => `
    border-bottom: 1px solid ${theme.palette.grey[300]};
    border-top: 1px solid ${theme.palette.grey[300]};
    th,td {
      color: ${theme.palette.grey[200]};
      font-size: .8rem;
      :first-of-type {
        padding-left: 0;
      }
    }
  `}
`;

const ChangePlanButton = styled(Button)`
  padding-top: 10px;
  padding-bottom: 10px;
  text-transform: initial;
`;

const ChoosePlanButton = styled(ChangePlanButton)`
  background-color: transparent;
`;

const ModalContainer = styled(Box)`
  max-width: 90vw;
  max-height: 80vh;
  overflow-y: auto;
  overflow-x: auto;
  ul {
    margin-top: 20px;
    margin-bottom: 10px;
    padding-left: 19px;
  }
  li {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.palette.grey[200]};
  }
`;

const TableCellWrapper = styled(Box)`
  p {
    &:nth-of-type(1) {
      font-size: 1rem;
      font-weight: 600;
    }
    &:nth-of-type(2),
    &:nth-of-type(3) {
      color: ${({ theme }) => theme.palette.grey[900]};
    }
  }
`;

const Radio: React.FC<RadioProps> = (props) => <MuiRadio {...props} color="primary" />;

export const Styled = {
  Column,
  Head,
  Row,
  PriceTypography,
  Title,
  TableContent,
  ChoosePlanButton,
  ChangePlanButton,
  ModalContainer,
  TableCellWrapper,
  Radio,
};
