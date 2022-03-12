import { ChangeEvent, useState } from 'react';
import { Checkbox, TableCell, TableHead, TableRow } from '@material-ui/core';

import SimpleTableHeaderCell from '../SimpleTableHeaderCell';
import { SimpleTableHeadProps } from './SimpleTableHead.types';

function EnhancedTableHead(props: SimpleTableHeadProps) {
  const [allSelected, setAllSelected] = useState(false);

  const { onSelectAll, onChangeSort, indeterminate, headCells, hasCheckbox } = props;

  const handleOnSelectAll = (event: ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    setAllSelected(checked);
    onSelectAll(checked);
  };

  return (
    <TableHead>
      <TableRow>
        {hasCheckbox && (
          <TableCell padding="checkbox">
            <Checkbox
              indeterminate={indeterminate}
              checked={allSelected}
              onChange={handleOnSelectAll}
              inputProps={{ 'aria-label': 'select all desserts' }}
            />
          </TableCell>
        )}
        {headCells.map((headCell) => (
          <SimpleTableHeaderCell onSort={onChangeSort} key={headCell.id} {...headCell} />
        ))}
      </TableRow>
    </TableHead>
  );
}

export default EnhancedTableHead;
