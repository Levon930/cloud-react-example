import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { Button, Table, TableBody, TableContainer, TableRow } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import { CompanyList, useChangeAdministratorRightsMutation, useCompanyUsersQuery } from '@api';
import { Pagination, WithLoading } from '@components';
import { toaster } from '@helpers';
import { paths as settingsPaths } from '@utils/routes/settings-routes';
import { rowsPerPage } from './ChangeMiddleAdminModal.constants';
import { userChange } from './ChangeMiddleAdminModal.types';
import { CheckboxComponent } from './CheckboxComponent';
import { UsersTableHead } from './TableHead';

import { Styled } from './ChangeMiddleAdminModal.styled';

let timeout = 0;

const ChangeMiddleAdminModalBody: React.FC = () => {
  const { push } = useHistory();

  const { data, refetch, fetchMore, loading } = useCompanyUsersQuery();

  const { t } = useTranslation('companySettings');

  const [page, setPage] = useState(0);
  const [selectedUsers, setSelectedUsers] = useState<userChange[]>([]);
  const [allSelected, setAllSelected] = useState(false);
  const [usersData, setUsersData] = useState<CompanyList[]>([]);

  const [changeAdministratorRightsMutation] = useChangeAdministratorRightsMutation();

  const handleModify = async () => {
    if (selectedUsers.length) {
      try {
        await changeAdministratorRightsMutation({
          variables: {
            users: selectedUsers,
          },
        });
        setSelectedUsers([]);
        refetch();
      } catch (e) {
        toaster(t('change_admin_modals.change_middle_admin.submitErrorMessage'), 'error');
      }
    } else {
      toaster(t('change_admin_modals.change_middle_admin.messageNoSelectedUser'), 'error');
    }
  };

  useEffect(() => {
    if (data && data.companyUsers.content) {
      setUsersData(data.companyUsers.content);
    }
  }, [data]);

  useEffect(() => {
    setSelectedUsers([]);
    setAllSelected(false);
  }, [page]);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage - 1);
  };

  const selectAll = (): void => {
    const pseudoUsersData = [...usersData];
    if (
      selectedUsers.length ===
      pseudoUsersData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).length
    ) {
      setSelectedUsers([]);
      setAllSelected(false);
    } else {
      const pageItemsUsers: userChange[] = pseudoUsersData
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((item) => {
          return { id: item.userid, value: item.role !== 'company_admin' };
        });
      setSelectedUsers(pageItemsUsers);
      setAllSelected(true);
    }
  };

  const handleSearch = (name: string) => {
    clearTimeout(timeout);
    timeout = window.setTimeout(() => {
      try {
        fetchMore({
          variables: { search: name },
        }).then(({ data }) => {
          if (data.companyUsers.content) {
            setUsersData(data.companyUsers.content);
          }
        });
      } catch (e) {
        toaster(t('change_admin_modals.change_middle_admin.search.errorMessage'), 'error');
      }
    }, 200);
  };

  return (
    <>
      <Styled.ModalInfo>{t('change_admin_modals.change_middle_admin.modal_info')}</Styled.ModalInfo>
      <Styled.SearchContainer>
        <Styled.Input
          placeholder={t('change_admin_modals.change_middle_admin.search.placeholder')}
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
        />
        <SearchIcon color="disabled" />
      </Styled.SearchContainer>
      <WithLoading loading={loading}>
        <TableContainer>
          <Table>
            <UsersTableHead allSelected={allSelected} selectAll={selectAll} />
            <TableBody>
              {[...usersData]
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((item) => (
                  <TableRow key={!item.login && item.logins ? item.logins[0] : item.login}>
                    <Styled.TableCell align="left">
                      <CheckboxComponent
                        selectedUsers={selectedUsers}
                        usersData={usersData}
                        setSelectedUsers={setSelectedUsers}
                        setAllSelected={setAllSelected}
                        page={page}
                        userId={item.userid}
                        userRole={item.role}
                      />
                    </Styled.TableCell>
                    <Styled.TableCellBox align="left">
                      {item.name ? item.name : item.login}
                    </Styled.TableCellBox>
                    <Styled.TableCellBox align="center">{item.status}</Styled.TableCellBox>
                    <Styled.TableCellBox align="center">
                      {item.role === 'company_admin' ? 'admin' : item.role}
                    </Styled.TableCellBox>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
          <Pagination
            count={Math.ceil(usersData.length / rowsPerPage)}
            onChange={handleChangePage}
            page={page + 1}
            showFirstButton
            showLastButton
          />
        </TableContainer>
      </WithLoading>
      <Styled.ButtonWrapper>
        <Button
          color="secondary"
          variant="outlined"
          onClick={() => push(`/${settingsPaths.companySettingsBasic}`)}
        >
          {t('change_admin_modals.change_middle_admin.cancel_button')}
        </Button>
        <Button
          color="primary"
          variant="contained"
          disabled={selectedUsers.length === 0}
          onClick={handleModify}
        >
          {t('change_admin_modals.change_middle_admin.apply_button')}
        </Button>
      </Styled.ButtonWrapper>
    </>
  );
};

export default ChangeMiddleAdminModalBody;
