import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { List } from '@material-ui/core';
import {
  ChevronLeft,
  ChevronRight,
  CloudUpload,
  CreateNewFolder,
  GroupAdd,
} from '@material-ui/icons';

import {
  useCreateFileMutation,
  useDocumentsQuery,
  useDownloadArchiveMutation,
  useDownloadUrlMutation,
} from '@api';
import { useReactiveVar } from '@apollo/client';
import { MenuItem, RightSidebarMenu } from '@components/RightSidebarMenu';
import { toaster } from '@helpers';
import { RightSidebarFooter } from '@layouts/Main/Footer';
import {
  archiveHashVar,
  documentCurrentPathVar,
  documentSelectedVar,
  documentsItemsPerPageVar,
  documentsOrderByVar,
  documentsOrderVar,
  documentsPageItemsVar,
  documentsPageVar,
  groupSelectedVar,
  teamSelectedVar,
} from '@store';
import { paths as profilePaths } from '@utils/routes/profile-routes';
import { paths as settingsPaths } from '@utils/routes/settings-routes';
import { DocumentType } from './RightSideBar.types';
import { createTeamItems } from './utils';

import { Styled } from './RightSideBar.styled';

const mockDataRightSidebar: MenuItem[] = [
  {
    name: 'Folders',
    Icon: () => <CreateNewFolder />,
  },
  {
    name: 'Cloud',
    Icon: () => <CloudUpload />,
  },
  {
    name: 'User',
    Icon: () => <GroupAdd />,
  },
];

const RightSideBar: React.FC<{ open: boolean; handleDrawerRight: () => void }> = ({
  open,
  handleDrawerRight,
}) => {
  const [menuItems, setMenuItems] = useState<null | MenuItem[]>(null);
  const { location, push } = useHistory();
  const { t } = useTranslation('teamPage');
  const { t: t2 } = useTranslation('groupPage');

  const documentPageItems = useReactiveVar(documentsPageItemsVar);
  const documentSelected = useReactiveVar(documentSelectedVar);
  const teamSelected = useReactiveVar(teamSelectedVar);
  const groupSelected = useReactiveVar(groupSelectedVar);
  const currentPath = useReactiveVar(documentCurrentPathVar);
  const page = useReactiveVar(documentsPageVar);
  const itemsPerPage = useReactiveVar(documentsItemsPerPageVar);
  const order = useReactiveVar(documentsOrderVar);
  const orderBy = useReactiveVar(documentsOrderByVar);

  const [createFile] = useCreateFileMutation();
  const { refetch } = useDocumentsQuery({
    variables: {
      path: currentPath,
      page,
      itemsPerPage,
      order,
      orderBy,
    },
  });
  const [downloadArchive] = useDownloadArchiveMutation();
  const [downloadUrl] = useDownloadUrlMutation();

  const handleDownload = async () => {
    try {
      if (documentSelected.length) {
        if (documentSelected[0].type === DocumentType.DocumentFolder) {
          const { data } = await downloadArchive({
            variables: {
              path: documentSelected[0].path,
            },
          });
          data?.downloadArchive.hash && archiveHashVar(data.downloadArchive.hash);
        } else if (documentSelected[0].type === DocumentType.DocumentFile) {
          const { data } = await downloadUrl({
            variables: {
              path: documentSelected[0].path,
            },
          });
          if (data?.downloadUrl.url) {
            const element = document.createElement('a');
            element.setAttribute('href', data?.downloadUrl.url);
            element.setAttribute('download', 'true');
            element.style.display = 'none';
            document.body.appendChild(element);
            element.click();
            document.body.removeChild(element);
          }
        }
      }
      documentSelectedVar([]);
    } catch (e) {
      toaster(t2('download.errorMessage'), 'error');
    }
  };

  const itemsTeamPage = [
    t('toolBar.createTeamMembers'),
    t('toolBar.inviteTeamMember'),
    t('toolBar.blockTeamMember'),
    t('toolBar.unblockTeamMember'),
    t('toolBar.deleteTeamMember'),
    t('toolBar.detaildedAuthority'),
    t('toolBar.setStorageSize'),
    t('toolBar.changePassword'),
    t('toolBar.deleteAccount'),
    t('toolBar.undelete'),
    t('toolBar.expirationDate'),
    t('toolBar.resendInvitation'),
    t('toolBar.cancelInvitation'),
  ];

  const itemsGroupPage = [
    t2('toolBar.newGroup'),
    t2('toolBar.changeGroupName'),
    t2('toolBar.deleteGroup'),
    t2('toolBar.detailedAuthority'),
  ];

  const handleUpload = async (files: File[]) => {
    const filesLink = await Promise.all(
      files.map(({ name, size }) => {
        return createFile({
          variables: {
            path: currentPath === '/' ? currentPath + name : `${currentPath}/${name}`,
            size,
            multipart: false,
            overwrite: 1,
          },
        });
      }),
    );
    filesLink.forEach(({ data }, i) => {
      if (data?.createFile.url) {
        fetch(data.createFile.url, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: files[i],
        }).then(() => {
          fetch(data.createFile.confirm_url, {
            method: 'POST',
          }).then(() => {
            refetch();
          });
        });
      }
    });
  };

  useEffect(() => {
    if (location.pathname.includes(settingsPaths.teamMember)) {
      setMenuItems(
        createTeamItems({ names: itemsTeamPage, push, parent: 'team', selected: teamSelected }),
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname, teamSelected]);

  useEffect(() => {
    if (location.pathname.includes(profilePaths.documents)) {
      setMenuItems(
        createTeamItems({
          names: documentPageItems,
          push,
          parent: 'documents',
          selected: documentSelected,
          handleUpload,
          handleDownload,
          currentPath,
        }),
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [documentPageItems, documentSelected, location.pathname, currentPath]);

  useEffect(() => {
    if (location.pathname.includes(settingsPaths.teamGroup)) {
      setMenuItems(
        createTeamItems({
          names: itemsGroupPage,
          push,
          parent: 'group',
          selected: groupSelected,
        }),
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [groupSelected, location.pathname]);

  return (
    <Styled.RightSideBarContainer>
      <Styled.ButtonDrower onClick={handleDrawerRight}>
        {open ? <ChevronRight /> : <ChevronLeft />}
      </Styled.ButtonDrower>
      <List>
        <RightSidebarMenu menuItemsArray={menuItems || mockDataRightSidebar} />
      </List>
      <RightSidebarFooter open={open} />
    </Styled.RightSideBarContainer>
  );
};

export default RightSideBar;
