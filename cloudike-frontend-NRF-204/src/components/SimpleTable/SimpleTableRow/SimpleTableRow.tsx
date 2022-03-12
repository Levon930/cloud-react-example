import React from 'react';
import { Checkbox } from '@material-ui/core';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import { SimpleTableRowProps } from './SimpleTableRow.types';

function SimpleTableRow(props: SimpleTableRowProps) {
  const { cells, hasCheckbox, row, keySelector, onClick, selected, onChange } = props;
  const key = keySelector(row);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event, row);
  };

  const handleOnClick = () => {
    onClick?.(row);
  };

  return (
    <TableRow
      hover
      onClick={handleOnClick}
      role={hasCheckbox ? 'checkbox' : 'row'}
      aria-checked={selected}
      selected={selected}
    >
      {hasCheckbox && (
        <TableCell padding="checkbox">
          <Checkbox
            onChange={handleOnChange}
            checked={selected}
            inputProps={{ 'aria-labelledby': key }}
          />
        </TableCell>
      )}
      {cells.map((cell) => {
        const { renderCell = (data: any) => data[cell.id] } = cell;
        const content = renderCell(row);

        return <TableCell key={`simpleTableCell-${key}`}>{content}</TableCell>;
      })}
    </TableRow>
  );
}

export default SimpleTableRow;
