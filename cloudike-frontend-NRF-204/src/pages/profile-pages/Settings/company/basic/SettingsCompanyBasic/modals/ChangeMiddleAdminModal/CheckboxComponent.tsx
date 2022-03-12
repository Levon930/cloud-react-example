import React, { Dispatch, SetStateAction } from 'react';
import { Checkbox } from '@material-ui/core';

import { CompanyList, Maybe, UserRole } from '@api';
import { rowsPerPage } from './ChangeMiddleAdminModal.constants';
import { userChange } from './ChangeMiddleAdminModal.types';

export const CheckboxComponent: React.FC<{
  selectedUsers: userChange[];
  usersData: CompanyList[];
  setSelectedUsers: Dispatch<SetStateAction<userChange[]>>;
  setAllSelected: Dispatch<SetStateAction<boolean>>;
  page: number;
  userId: number;
  userRole?: Maybe<string>;
}> = ({ selectedUsers, usersData, setSelectedUsers, setAllSelected, page, userId, userRole }) => {
  const checkUserSelected = (id: number) => {
    return selectedUsers.some((selectedUser) => selectedUser.id === id);
  };

  const selectUser = (): void => {
    const pseudoUsersData = [...usersData];
    if (checkUserSelected(userId)) {
      setSelectedUsers(selectedUsers.filter((item) => item.id !== userId));
      setAllSelected(false);
    } else {
      const pseudoSelectedUsers = [...selectedUsers];
      pseudoSelectedUsers.push({ id: userId, value: userRole !== UserRole.CompanyAdmin });
      setSelectedUsers(pseudoSelectedUsers);
      if (
        pseudoSelectedUsers.length ===
        pseudoUsersData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).length
      ) {
        setAllSelected(true);
      }
    }
  };

  return <Checkbox color="primary" checked={checkUserSelected(userId)} onChange={selectUser} />;
};
