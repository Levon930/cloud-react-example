import React from 'react';
import { Checkbox as MuiCheckbox, CheckboxProps, TableCell } from '@material-ui/core';

import styled from '@emotion/styled';

const UsersTableCell = styled(TableCell)`
  font-weight: 600;
  padding: 0;
`;

const Checkbox: React.FC<CheckboxProps> = (props) => <MuiCheckbox {...props} color="primary" />;

export const Styled = {
  UsersTableCell,
  Checkbox,
};
