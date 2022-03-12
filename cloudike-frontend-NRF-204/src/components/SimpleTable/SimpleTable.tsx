import React, { useCallback, useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import { Pagination } from '@material-ui/lab';

import { Sort, SortOrder } from '@api';
import { SimpleTableProps } from './SimpleTable.types';
import SimpleTableHead from './SimpleTableHead';
import SimpleTableRow from './SimpleTableRow';
import SimpleTableToolbar, { TABLE_SELECT_ITEMS_PER_PAGE } from './SimpleTableToolbar';

export default function SimpleTable<T>(props: SimpleTableProps<T>) {
  const [selected, setSelected] = React.useState<string[]>([]);
  const [sort, setSort] = useState<Sort>({ order: SortOrder.Asc, orderBy: 'path' });
  // TODO get itemsPerPage from query string
  const [itemsPerPage, setItemsPerPage] = useState(TABLE_SELECT_ITEMS_PER_PAGE[0]);
  // TODO get page from query string
  const [page, setPage] = useState(0);

  const {
    headers,
    rows,
    keySelector,
    hasCheckbox,
    onChangeTable,
    onChangeSelected,
    toolbarComponent,
  } = props;
  const handleOnChangeSort = (sort: Sort) => {
    setSort(sort);
    // FIXME get page and itemsPerPage from query string
    onChangeTable({ sort, pagination: { itemsPerPage, page } });
  };

  const handleSelectAllClick = (checked: boolean) => {
    const selectedRows = checked ? rows : [];

    setSelected(selectedRows.map(keySelector));
    onChangeSelected?.(selectedRows);
  };
  // TODO add on click handle if nessasary
  // const handleClick = (row: T) => {};

  const handleChangeRow = (event: React.ChangeEvent<HTMLInputElement>, row: T) => {
    const key = keySelector(row);
    if (event.target.checked) {
      setSelected([...selected, key]);
    } else {
      setSelected(selected.filter((item) => item !== key));
    }
  };
  const handleOnChangeItemsPerPage = useCallback(
    (value: number) => {
      setItemsPerPage(value);
      // FIXME get page from query string
      onChangeTable({ sort, pagination: { itemsPerPage: value, page } });
    },
    [sort],
  );

  const handleOnChangePage = useCallback(
    (event: React.ChangeEvent<unknown>, value: number) => {
      setPage(page);
      onChangeTable({ sort, pagination: { itemsPerPage, page: value } });
    },
    [page],
  );

  return (
    <TableContainer>
      <SimpleTableToolbar
        itemsPerPage={itemsPerPage}
        onChange={handleOnChangeItemsPerPage}
        numSelected={selected.length}
        toolbarComponent={toolbarComponent}
      />
      <Table aria-labelledby="tableTitle" aria-label="enhanced table">
        <SimpleTableHead
          indeterminate={selected.length ? selected.length !== rows.length : false}
          onSelectAll={handleSelectAllClick}
          onChangeSort={handleOnChangeSort}
          headCells={headers}
          hasCheckbox={hasCheckbox}
        />
        <TableBody>
          {rows.map((row) => {
            const key = keySelector(row);
            const isSelected = selected.some((item) => item === key);

            return (
              <SimpleTableRow
                hasCheckbox={hasCheckbox}
                keySelector={keySelector}
                // onClick={handleClick}
                cells={headers}
                key={key}
                onChange={handleChangeRow}
                row={row}
                selected={isSelected}
              />
            );
          })}
        </TableBody>
      </Table>
      <Pagination
        count={rows.length}
        onChange={handleOnChangePage}
        page={page + 1}
        showFirstButton
        showLastButton
      />
    </TableContainer>
  );
}
