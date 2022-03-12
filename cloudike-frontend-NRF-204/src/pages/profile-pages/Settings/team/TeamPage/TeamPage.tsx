import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { format } from 'date-fns';
import { TableBody, TableCell, TableContainer } from '@material-ui/core';

import { CompanyList, useCompanyUsersQuery } from '@api';
import { useReactiveVar } from '@apollo/client';
import { Pagination, WithLoading } from '@components';
import { Drop, IP } from '@components/SvgComponents';
import { toaster } from '@helpers';
import { teamSelectedVar, userVar } from '@store';
import { EnhancedTableHead } from './EnhancedTableHead';
import { EnhancedTableToolbar } from './EnhancedTableToolbar';
import {
  BlockMemberModal,
  CancelDeletionModal,
  ChangeAuthorityModal,
  ChangePasswordModal,
  CreateTeamMemberModal,
  DeleteMemberModal,
  InviteMemberModal,
  SetExpiratrionDateModal,
  SetStorageSizeModal,
  UnblockMemberModal,
} from './Modals';
import { HeadCell, User } from './TeamPage.types';
import { TeamPagePopover } from './TeamPagePopover';
import { getComparator, getRoleLabel, modStatus, stableSort, usageHandler } from './utils';

import { Styled } from './TeamPage.styled';

const rowsPerPage = 4;
const orderBy = 'name';
let timeout = 0;

const TeamPage: React.FC = () => {
  const [order, setOrder] = useState<'desc' | 'asc'>('asc');
  const [rows, setRows] = useState<CompanyList[] | any[]>([]);
  const [popoverIsOpen, setPopoverIsOpen] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [page, setPage] = useState(0);
  const user = useReactiveVar(userVar);
  const selected = useReactiveVar(teamSelectedVar);

  const { data, fetchMore, refetch, loading } = useCompanyUsersQuery();

  const { t } = useTranslation('teamPage');

  useEffect(() => {
    if (data && data.companyUsers.content) {
      setRows(data.companyUsers.content);
    }
  }, [data]);

  const handleRequestSort = (property: keyof CompanyList) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      teamSelectedVar(rows);

      return;
    }
    teamSelectedVar([]);
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
      id: 'storage_size',
      numeric: false,
      disablePadding: true,
      label: t('tableHeader.storageSize'),
    },
    {
      id: 'role',
      numeric: false,
      disablePadding: true,
      label: t('tableHeader.role'),
    },
    {
      id: 'is_active',
      numeric: false,
      disablePadding: true,
      label: t('tableHeader.status'),
    },
    {
      id: 'last_login',
      numeric: false,
      disablePadding: true,
      label: t('tableHeader.recentSignIn'),
    },
    {
      id: 'expired',
      numeric: false,
      disablePadding: true,
      label: t('tableHeader.expirationDate'),
    },
    {
      id: 'detailed_authority',
      numeric: false,
      disablePadding: true,
      label: t('tableHeader.detailedAuthority'),
    },
  ];

  const handleClick = (event: React.SyntheticEvent, name: string, user: User) => {
    const selectedIndex = selected.findIndex((item) => (item.login || item.name) === name);
    let newTeamSelected: User[] = [];

    if (selectedIndex === -1) {
      newTeamSelected = newTeamSelected.concat(selected, user);
    } else if (selectedIndex === 0) {
      newTeamSelected = newTeamSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newTeamSelected = newTeamSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newTeamSelected = newTeamSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    teamSelectedVar(newTeamSelected);
  };
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage - 1);
  };

  const isSelected = (name: string) =>
    selected.findIndex((item) => (item.name || item.login) === name) !== -1;

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const handleRightClick = (event: React.MouseEvent, user: User) => {
    event.preventDefault();
    setPosition({ x: event.pageX, y: event.pageY });
    setPopoverIsOpen((prev) => !prev);
    userVar(user);
  };

  const handleSearch = (event: { target: HTMLInputElement | HTMLTextAreaElement }) => {
    clearTimeout(timeout);
    timeout = window.setTimeout(() => {
      try {
        fetchMore({
          variables: { search: event.target.value },
        }).then(({ data }) => {
          if (data.companyUsers.content) {
            setRows(data.companyUsers.content);
            setPage(0);
          }
        });
      } catch (e) {
        toaster(t('search.errorMessage'), 'error');
      }
    }, 200);
  };

  return (
    <WithLoading loading={loading}>
      <TableContainer>
        <EnhancedTableToolbar onSearch={handleSearch} />
        <>
          <ChangePasswordModal refetch={refetch} />
          <UnblockMemberModal refetch={refetch} />
          <BlockMemberModal refetch={refetch} />
          <ChangeAuthorityModal refetch={refetch} />
          <SetStorageSizeModal refetch={refetch} />
          <SetExpiratrionDateModal refetch={refetch} />
          {!!selected.length && <DeleteMemberModal members={rows} refetch={refetch} />}
          <InviteMemberModal refetch={refetch} />
          <CreateTeamMemberModal refetch={refetch} />
          <CancelDeletionModal refetch={refetch} />
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
                .map(
                  (
                    {
                      name,
                      logins,
                      storage_size,
                      hard_quota_size,
                      role,
                      is_active,
                      last_login,
                      expired,
                      use_watermarks,
                      can_print,
                      can_download,
                      pc_can_download,
                      user_mobile_restriction,
                      userid,
                      ip_restriction,
                      allowed_ips,
                      login,
                      status,
                    },
                    index,
                  ) => {
                    const isItemSelected = isSelected(login || name || '');
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                      <Styled.Row
                        hover
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={name || login}
                        selected={isItemSelected}
                        onContextMenu={(event) =>
                          status === 'common' &&
                          handleRightClick(event, {
                            name,
                            userid,
                            is_active,
                            ip_restriction,
                            allowed_ips,
                            user_mobile_restriction,
                            pc_can_download,
                            can_download,
                            can_print,
                            use_watermarks,
                            login,
                          })
                        }
                      >
                        <TeamPagePopover
                          isOpen={popoverIsOpen}
                          handleToggle={setPopoverIsOpen}
                          isActive={user?.is_active || false}
                          anchorPosition={
                            position.y !== null && position.x !== null
                              ? { top: position.y, left: position.x }
                              : undefined
                          }
                        />
                        <TableCell padding="checkbox">
                          <Styled.Checkbox
                            checked={isItemSelected}
                            inputProps={{ 'aria-labelledby': labelId }}
                            onClick={(event) =>
                              handleClick(event, login || name || '', {
                                name,
                                userid,
                                is_active,
                                ip_restriction,
                                allowed_ips,
                                user_mobile_restriction,
                                pc_can_download,
                                can_download,
                                can_print,
                                use_watermarks,
                                login,
                                status,
                              })
                            }
                          />
                        </TableCell>
                        <TableCell component="th" id={labelId} scope="row" padding="none">
                          {name}
                        </TableCell>
                        <TableCell component="th" id={labelId} scope="row" padding="none">
                          {(logins && logins[0]?.slice(6)) || login?.slice(6)}
                        </TableCell>
                        <TableCell component="th" id={labelId} scope="row" padding="none">
                          {usageHandler(storage_size, hard_quota_size)}
                        </TableCell>
                        <TableCell component="th" id={labelId} scope="row" padding="none">
                          {getRoleLabel(role)}
                        </TableCell>
                        <TableCell component="th" id={labelId} scope="row" padding="none">
                          {is_active ? modStatus(status || '') : modStatus(status || '', false)}
                        </TableCell>
                        <TableCell component="th" id={labelId} scope="row" padding="none">
                          {last_login && format(last_login, 'yyyy.MM.dd HH:MM')}
                        </TableCell>
                        <TableCell component="th" id={labelId} scope="row" padding="none">
                          {!expired ? 'None' : format(expired, 'MMM dd, yyyy')}
                        </TableCell>
                        <TableCell component="th" id={labelId} scope="row" padding="none">
                          <Styled.IconsBox>
                            {use_watermarks && <Drop />}
                            {can_print && <Styled.Print />}
                            {can_download && <Styled.CloudDownload />}
                            {pc_can_download && <Styled.Web />}
                            {user_mobile_restriction && <Styled.PhoneIphone />}
                            {ip_restriction && <IP />}
                          </Styled.IconsBox>
                        </TableCell>
                      </Styled.Row>
                    );
                  },
                )}
              {emptyRows > 0 && (
                <Styled.Row style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={9} />
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
    </WithLoading>
  );
};

export default TeamPage;
