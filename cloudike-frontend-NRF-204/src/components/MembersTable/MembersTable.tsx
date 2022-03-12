import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TableBody, TableCell } from '@material-ui/core';

import { CompanyList, useCompanyUsersQuery, useGroupUsersQuery } from '@api';
import { Pagination } from '@components';
import { toaster } from '@helpers';
import { EnhancedTableHead } from './EnhancedTableHead';
import { EnhancedTableToolbar } from './EnhancedTableToolbar';
import { HeadCell, Props } from './MembersTable.types';
import { getComparator, stableSort } from './utils';

import { Styled } from './MembersTable.styled';

const rowsPerPage = 3;
const orderBy = 'name';
let timeout = 0;

/**
 * TODO: move to team members page - https://yt.cloudike.io/issue/NRF-211
 * use simpleTable component
 * rewrite, connect with BE
 */
const MembersTable: React.FC<Props> = ({ tab, selected, setSelected, groupId }) => {
  const [order, setOrder] = useState<'desc' | 'asc'>('asc');
  const [rows, setRows] = useState<CompanyList[] | []>([]);
  const [page, setPage] = useState(0);
  const [loadingSearch, setLoadingSearch] = useState(false);
  const {
    data: companyUsers,
    loading: loadingCompanyUsers,
    fetchMore: fetchMoreCompanyUsers,
    refetch: refetchCompanyUsers,
  } = useCompanyUsersQuery({
    variables: {
      group_id: groupId,
    },
  });
  const {
    data: groupUsers,
    loading: loadingGroupUsers,
    fetchMore: fetchMoreGroupUsers,
    refetch: refetchGroupUsers,
  } = useGroupUsersQuery({
    variables: {
      group_id: groupId,
    },
  });

  const { t } = useTranslation('teamPage');

  useEffect(() => {
    if (companyUsers && companyUsers.companyUsers.content && !tab) {
      setRows(companyUsers.companyUsers.content);
    } else if (groupUsers && groupUsers.groupUsers.users && tab) {
      setRows(groupUsers.groupUsers.users);
    }
    refetchCompanyUsers();
    refetchGroupUsers();

    return () => {
      setSelected([]);
    };
  }, [companyUsers, groupUsers, setSelected, tab]);

  const handleRequestSort = (property: keyof CompanyList) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n: CompanyList) => n.userid);
      setSelected(newSelecteds);

      return;
    }
    setSelected([]);
  };

  const headCells: HeadCell[] = [
    {
      id: 'name',
      numeric: false,
      disablePadding: true,
      label: t('tableHeader.name'),
    },
    {
      id: 'logins',
      numeric: false,
      disablePadding: true,
      label: t('tableHeader.email'),
    },
    {
      id: 'is_active',
      numeric: false,
      disablePadding: true,
      label: t('tableHeader.status'),
    },
  ];

  const handleClick = (event: React.SyntheticEvent, userid: number) => {
    const selectedIndex = selected.findIndex((item) => item === userid);
    let newSelected: number[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, userid);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage - 1);
  };

  const isSelected = (userid: number) => selected.findIndex((item) => item === userid) !== -1;

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const handleShearch = (event: { target: HTMLInputElement | HTMLTextAreaElement }) => {
    clearTimeout(timeout);
    setLoadingSearch(true);
    timeout = window.setTimeout(() => {
      try {
        if (!tab) {
          fetchMoreCompanyUsers({
            variables: { search: event.target.value, group_id: groupId },
          })
            .then(({ data }) => data.companyUsers.content && setRows(data.companyUsers.content))
            .then(() => setLoadingSearch(false));
        } else {
          fetchMoreGroupUsers({
            variables: { search: event.target.value, group_id: groupId },
          })
            .then(({ data }) => data.groupUsers.users && setRows(data.groupUsers.users))
            .then(() => setLoadingSearch(false));
        }
      } catch (e) {
        toaster(t('search.errorMessage'), 'error');
      }
      setPage(0);
    }, 200);
  };

  return (
    <Styled.Container>
      <EnhancedTableToolbar onSearch={handleShearch} />
      {loadingCompanyUsers || loadingGroupUsers || loadingSearch ? (
        <Styled.CircularLoading disableShrink />
      ) : (
        <>
          <Styled.TableComponent>
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
              headCells={headCells}
            />
            <TableBody>
              {stableSort(rows, getComparator(order))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(({ name, logins, is_active, userid }, index) => {
                  const isItemSelected = isSelected(userid);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <Styled.Row
                      hover
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={name}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Styled.Checkbox
                          checked={isItemSelected}
                          inputProps={{ 'aria-labelledby': labelId }}
                          onClick={(event) => handleClick(event, userid)}
                        />
                      </TableCell>
                      <TableCell component="th" id={labelId} scope="row" padding="none">
                        {name}
                      </TableCell>
                      <TableCell component="th" id={labelId} scope="row" padding="none">
                        {logins && logins[0]?.slice(6)}
                      </TableCell>
                      <TableCell component="th" id={labelId} scope="row" padding="none">
                        {is_active ? 'Active' : 'Expired'}
                      </TableCell>
                    </Styled.Row>
                  );
                })}
              {emptyRows > 0 && (
                <Styled.Row style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={9} />
                </Styled.Row>
              )}
            </TableBody>
          </Styled.TableComponent>
          <Pagination
            count={Math.ceil(rows.length / 3)}
            onChange={handleChangePage}
            showFirstButton
            showLastButton
          />
        </>
      )}
    </Styled.Container>
  );
};

export default MembersTable;
