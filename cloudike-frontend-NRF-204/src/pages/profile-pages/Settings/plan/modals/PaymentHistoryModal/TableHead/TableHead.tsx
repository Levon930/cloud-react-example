import React from 'react';
import { TableHead, TableRow } from '@material-ui/core';

import { Styled } from './TableHead.styled';

const PaymentHistoryTableHead: React.FC = () => {
  return (
    <TableHead>
      <TableRow>
        <Styled.HistoryTableCell>Plan</Styled.HistoryTableCell>
        <Styled.HistoryTableCell align="center">Charge</Styled.HistoryTableCell>
        <Styled.HistoryTableCell align="center">Payment date</Styled.HistoryTableCell>
        <Styled.HistoryTableCell align="center">Period</Styled.HistoryTableCell>
        <Styled.HistoryTableCell align="center">Reseipt</Styled.HistoryTableCell>
      </TableRow>
    </TableHead>
  );
};

export default PaymentHistoryTableHead;
