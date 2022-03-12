import React from 'react';
import { TableCell, TableHead, TableSortLabel } from '@material-ui/core';

import { EnhancedTableProps } from './EnhancedTableHead.types';

import { Styled } from './EnhancedTableHead.styled';

const EnhancedTableHead: React.FC<EnhancedTableProps> = ({
  onSelectAllClick,
  order,
  orderBy,
  numSelected,
  rowCount,
  onRequestSort,
  headCells,
}) => {
  const createSortHandler = (property: 'path' | 'bytes' | 'modified') => () => {
    onRequestSort(property);
  };

  return (
    <TableHead>
      <Styled.Row>
        <TableCell padding="checkbox">
          <Styled.Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all desserts' }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Styled.VisuallyHidden>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Styled.VisuallyHidden>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </Styled.Row>
    </TableHead>
  );
};

export default EnhancedTableHead;
