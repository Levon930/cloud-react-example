import React from 'react';
import { TableHead, TableRow } from '@material-ui/core';

import { Styled } from './TableHead.styled';

const UsersTableHead: React.FC = () => {
  return (
    <TableHead>
      <TableRow>
        <Styled.UsersTableCell align="left" />
        <Styled.UsersTableCell align="left">Name</Styled.UsersTableCell>
        <Styled.UsersTableCell align="center">Status</Styled.UsersTableCell>
        <Styled.UsersTableCell align="center">Role</Styled.UsersTableCell>
      </TableRow>
    </TableHead>
  );
};

export default UsersTableHead;
