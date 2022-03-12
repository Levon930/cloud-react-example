import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { Button, Checkbox, Table, TableBody, TableContainer, TableRow } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import { CompanyList, useCompanyUsersQuery } from '@api';
import { Pagination, WithLoading } from '@components';
import { toaster } from '@helpers';
import { paths as settingsPaths } from '@utils/routes/settings-routes';
import { rowsPerPage } from './ChangeSuperAdminModal.constants';
import { UsersTableHead } from './TableHead';

import { Styled } from './ChangeSuperAdminModall.styled';

let timeout = 0;

const ChangeSuperAdminModalBody: React.FC = () => {
  const { push } = useHistory();

  const { data, fetchMore, loading } = useCompanyUsersQuery();

  const { t } = useTranslation('companySettings');

  const [page, setPage] = useState(0);
  const [selectedUser, setSelectedUser] = useState<number[]>([]);
  const [usersData, setUsersData] = useState<CompanyList[]>([]);

  useEffect(() => {
    if (data && data.companyUsers.content) {
      setUsersData(data.companyUsers.content);
    }
  }, [data]);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage - 1);
  };

  const checkeUserSelected = (id: number) => {
    return selectedUser.includes(id);
  };

  const selecteUser = (id: number): void => {
    if (checkeUserSelected(id)) {
      setSelectedUser([]);
    } else {
      setSelectedUser([id]);
    }
  };

  const modifySuperAdmin = (id: number) => {
    if (selectedUser.length !== 0) {
      push(`/${settingsPaths.confirmSuperAdminModal}?id=${id}`);
    } else {
      toaster('Please select at least one user', 'error');
    }
  };

  const handleShearch = (name: string) => {
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
        setPage(0);
      } catch (e) {
        toaster(t('change_admin_modals.change_super_admin.search.errorMessage'), 'error');
      }
    }, 200);
  };

  return (
    <>
      <Styled.ModalInfo>{t('change_admin_modals.change_super_admin.modal_info')}</Styled.ModalInfo>
      <Styled.SearchContainer>
        <Styled.Input
          placeholder="Search by name or email"
          onChange={(e) => {
            handleShearch(e.target.value);
          }}
        />
        <SearchIcon color="disabled" />
      </Styled.SearchContainer>
      <WithLoading loading={loading}>
        <TableContainer>
          <Table>
            <UsersTableHead />
            <TableBody>
              {[...usersData]
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((item) => (
                  <TableRow key={item.userid}>
                    <Styled.TableCell align="left">
                      <Checkbox
                        color="primary"
                        checked={checkeUserSelected(item.userid)}
                        onChange={() => selecteUser(item.userid)}
                      />
                    </Styled.TableCell>
                    <Styled.TableCellBox align="left">{item.name}</Styled.TableCellBox>
                    <Styled.TableCellBox align="center">
                      {item.is_active ? 'active' : 'passive'}
                    </Styled.TableCellBox>
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
      <Styled.ButtonContainer>
        <Button
          color="secondary"
          variant="outlined"
          onClick={() => push(`/${settingsPaths.companySettingsBasic}`)}
        >
          {t('change_admin_modals.change_super_admin.cancel_button')}
        </Button>
        <Button
          color="primary"
          variant="contained"
          disabled={selectedUser.length === 0}
          onClick={() => modifySuperAdmin(selectedUser[0])}
        >
          {t('change_admin_modals.change_super_admin.apply_button')}
        </Button>
      </Styled.ButtonContainer>
    </>
  );
};

export default ChangeSuperAdminModalBody;
