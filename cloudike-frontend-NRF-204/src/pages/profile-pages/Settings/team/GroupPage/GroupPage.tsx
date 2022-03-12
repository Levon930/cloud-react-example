import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, Route, useHistory } from 'react-router-dom';
import { Button, Checkbox, Chip, TableBody, TableCell, TableContainer } from '@material-ui/core';

import { Group, useGroupsQuery } from '@api';
import { useReactiveVar } from '@apollo/client';
import { Pagination } from '@components';
import { Drop, IP } from '@components/SvgComponents';
import { groupSelectedVar } from '@store';
import { modalQuerys, paths as settingsPaths } from '@utils/routes/settings-routes';
import { EnhancedTableHead } from './EnhancedTableHead';
import { HeadCell, HeaderId, Order, SelectedGroup, SortBy } from './GroupPage.types';
import {
  AddOrDeleteMemberModal,
  ChangeAuthorityModal,
  ChangeGroupNameModal,
  DeleteGroupModal,
  NewGroupModal,
} from './Modals';
import { getComparator, stableSort } from './utils';

import { Styled } from './GroupPage.styled';

const rowsPerPage = 4;

const GroupPage: React.FC = () => {
  const selected = useReactiveVar(groupSelectedVar);
  const { data, refetch: refetchGroups } = useGroupsQuery();
  const { push } = useHistory();
  const [order, setOrder] = useState<Order>(Order.asc);
  const [orderBy] = useState<SortBy>(SortBy.name);
  const [rows, setRows] = useState<Group[] | []>([]);
  // const [selected, setSelected] = useState<string[] | []>([]);
  const [page, setPage] = useState(0);

  const { t } = useTranslation('groupPage');

  const handleCreateGroup = () => {
    push(`/${settingsPaths.teamGroup}?modal=${modalQuerys.teamGroupCreate}`);
  };

  useEffect(() => {
    if (data) {
      setRows(data.groups.groups);
    }
  }, [data]);

  const handleRequestSort = (property: SortBy) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? Order.desc : Order.asc);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n: Group) => ({ name: n.name, group_id: n.group_id }));
      groupSelectedVar(newSelecteds);

      return;
    }
    groupSelectedVar([]);
  };

  const headCells: HeadCell[] = [
    {
      id: HeaderId.name,
      numeric: false,
      disablePadding: true,
      label: t('tableHeader.groupName'),
    },
    {
      id: HeaderId.users,
      numeric: false,
      disablePadding: true,
      label: t('tableHeader.teamMember'),
    },
    {
      id: HeaderId.detailed_authority,
      numeric: false,
      disablePadding: true,
      label: t('tableHeader.detailedAuthority'),
    },
  ];

  const handleClick = (event: React.SyntheticEvent, name: string, group_id: number) => {
    const selectedIndex = selected.findIndex((item) => item.name === name);
    let newSelected: SelectedGroup[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, { name, group_id });
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

    groupSelectedVar(newSelected);
  };
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage - 1);
  };

  const isSelected = (name: string) => selected.findIndex((item) => item.name === name) !== -1;

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  if (!data?.groups.count) {
    return (
      <Styled.Container>
        <NewGroupModal refetch={refetchGroups} />
        <ChangeAuthorityModal refetch={refetchGroups} />
        <DeleteGroupModal refetch={refetchGroups} />
        <ChangeGroupNameModal refetch={refetchGroups} />
        <Styled.Description>{t('createTitle')}</Styled.Description>
        <Button color="primary" variant="contained" onClick={handleCreateGroup}>
          {t('createGroup')}
        </Button>
      </Styled.Container>
    );
  }

  return (
    <TableContainer>
      <>
        <NewGroupModal refetch={refetchGroups} />
        <Route path={`/${settingsPaths.teamGroupInviteMember}`}>
          <AddOrDeleteMemberModal
            refetchGroups={refetchGroups}
            AlternateGroupId={data.groups.groups[0].group_id}
          />
        </Route>
        <Route path={`/${settingsPaths.teamGroupDeleteMember}`}>
          <AddOrDeleteMemberModal
            refetchGroups={refetchGroups}
            AlternateGroupId={data.groups.groups[0].group_id}
          />
        </Route>
        <ChangeAuthorityModal refetch={refetchGroups} />
        <DeleteGroupModal refetch={refetchGroups} />
        <ChangeGroupNameModal refetch={refetchGroups} />
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
            {stableSort(rows, getComparator(order, orderBy))
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(
                (
                  {
                    name,
                    use_watermarks,
                    can_print,
                    can_download,
                    pc_can_download,
                    mobile_restriction,
                    ip_restriction,
                    users,
                    group_id,
                  },
                  index,
                ) => {
                  const isItemSelected = isSelected(name);
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
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{ 'aria-labelledby': labelId }}
                          onClick={(event) => handleClick(event, name, group_id || 0)}
                        />
                      </TableCell>
                      <TableCell component="th" id={labelId} scope="row" padding="none">
                        {name}
                      </TableCell>
                      <TableCell component="th" id={labelId} scope="row" padding="none">
                        <Styled.UsersConainer>
                          <Styled.PlusMinus>
                            <Link
                              to={`/${settingsPaths.teamGroupInviteMember}?groupId=${group_id}`}
                            >
                              <Styled.PlusIcon />
                            </Link>
                            <Link
                              to={`/${settingsPaths.teamGroupDeleteMember}?groupId=${group_id}`}
                            >
                              <Styled.MinusIcon />
                            </Link>
                          </Styled.PlusMinus>
                          <div>
                            {users?.map((item, index) => (
                              <Chip
                                label={item && item.name ? item.name : 'name'}
                                key={item && item.userid ? item.userid : index}
                              />
                            ))}
                          </div>
                        </Styled.UsersConainer>
                      </TableCell>
                      <TableCell component="th" id={labelId} scope="row" padding="none">
                        <Styled.IconsBox>
                          {use_watermarks && <Drop />}
                          {can_print && <Styled.Print />}
                          {can_download && <Styled.CloudDownload />}
                          {pc_can_download && <Styled.Web />}
                          {mobile_restriction && <Styled.PhoneIphone />}
                          {ip_restriction && <IP />}
                        </Styled.IconsBox>
                      </TableCell>
                    </Styled.Row>
                  );
                },
              )}
            {emptyRows > 0 && (
              <Styled.Row style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={4} />
              </Styled.Row>
            )}
          </TableBody>
        </Styled.TableComponent>
        <Pagination
          count={Math.ceil(rows.length / 4)}
          onChange={handleChangePage}
          showFirstButton
          showLastButton
        />
      </>
    </TableContainer>
  );
};

export default GroupPage;
