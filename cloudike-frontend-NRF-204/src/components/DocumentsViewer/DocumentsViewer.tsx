import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory, useLocation } from 'react-router';

import { useCreateFileMutation, useDocumentsQuery } from '@api';
import { useReactiveVar } from '@apollo/client';
import { DocumentsTable } from '@components/DocumentsTable';
import { toaster } from '@helpers';
import {
  archiveHashVar as setArchiveVar,
  documentCurrentPathVar as setCurrentPath,
  documentExpandedVar as setExpanded,
  documentSelectedVar as setSelected,
  documentsItemsPerPageVar as setItemsPerPage,
  documentsItemsTotal as setItemsTotal,
  documentsOrderByVar as setOrderBy,
  documentsOrderVar as setOrder,
  documentsPageItemsVar as setPageItems,
  documentsPageVar as setPage,
  documentVar as setDocument,
} from '@store';
import { modalQuerys } from '@utils/routes/profile-routes';
import { DocTypes, Document, handleOpenArgs } from './DocumentsViewer.types';
import { CreateFolderModal, DeleteModal, FileModal, RenameModal, ShareModal } from './Modals';
import { pathToName } from './utils';

// FIXME: IT DOESN'T WORK
/**
 * @deprecated rewrite, remove modals folder,
 */
const Documents: React.FC = () => {
  const { t } = useTranslation('documents');
  const [rows, setRows] = useState<Document[]>([]);

  const itemsTotal = useReactiveVar(setItemsTotal);
  const page = useReactiveVar(setPage);
  const itemsPerPage = useReactiveVar(setItemsPerPage);
  const currentDocument = useReactiveVar(setDocument);
  const folderPageItems = useReactiveVar(setPageItems);
  const archiveHash = useReactiveVar(setArchiveVar);
  const currentPath = useReactiveVar(setCurrentPath);
  const selected = useReactiveVar(setSelected);
  const order = useReactiveVar(setOrder);
  const orderBy = useReactiveVar(setOrderBy);

  const { search } = useLocation();

  const queryFolder = new URLSearchParams(search).get('folder');

  const [createFile] = useCreateFileMutation();
  const { data, fetchMore, refetch } = useDocumentsQuery({
    variables: {
      path: currentPath,
      page,
      itemsPerPage,
      order,
      orderBy,
    },
  });

  const { push } = useHistory();

  useEffect(() => {
    if (data && data.documents && data.documents.content) {
      setRows(data.documents.content);
      setItemsTotal(data.documents.itemsTotal);
      setCurrentPath(data.documents.path);
    }
  }, [data]);

  useEffect(() => {
    return () => {
      setDocument(null);
      setArchiveVar('');
      setExpanded(false);
      setCurrentPath('');
      setSelected([]);
    };
  }, []);

  useEffect(() => {
    fetchMore({
      variables: {
        page,
        itemsPerPage,
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, itemsPerPage]);

  useEffect(() => {
    fetchMore({
      variables: {
        order,
        orderBy,
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [order, orderBy]);

  useEffect(() => {
    push({ search: `?folder=${currentPath}` });
  }, [currentPath, push]);

  useEffect(() => {
    if (queryFolder && queryFolder !== currentPath) {
      fetchMore({
        variables: {
          path: queryFolder,
        },
      }).then(({ data }) => {
        if (data && data.documents && data.documents.content) {
          setCurrentPath(data.documents.path);
          setRows(data.documents.content);
        }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryFolder]);

  if (folderPageItems.length === 0) {
    setPageItems([
      t('toolBar.newFolder'),
      t('toolBar.upload'),
      t('toolBar.download'),
      t('toolBar.share'),
      t('toolBar.delete'),
      t('toolBar.moveCopy'),
    ]);
  }

  const handleChange = async (files: File[]) => {
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
            'Content-Type': 'application/octet-stream',
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

  const handleOpenFolder = async (path: string) => {
    try {
      const { data } = await fetchMore({
        variables: {
          path,
          page,
          itemsPerPage,
        },
      });
      if (data && data.documents && data.documents.content) {
        setPage(0);
        setRows(data.documents.content);
        setItemsTotal(data.documents.itemsTotal);
        setCurrentPath(data.documents.path);
        setSelected([]);
      }
    } catch (e) {
      toaster(t('errorMessages.openFolder'), 'error');
    }
  };

  const handleGoMainFolder = async () => {
    try {
      if (currentPath !== '/') {
        const { data } = await fetchMore({
          variables: {
            path: '/',
            page: 0,
          },
        });
        if (data && data.documents && data.documents.content) {
          setPage(0);
          setRows(data.documents.content);
          setItemsTotal(data.documents.itemsTotal);
          setCurrentPath(data.documents.path);
        }
      }
    } catch (e) {
      toaster(t('errorMessages.goToMainFolder'), 'error');
    }
  };

  const handleOpen = (doc: handleOpenArgs) => {
    return () => {
      if (doc.type === DocTypes.documentFolder) handleOpenFolder(doc.path);
      if (doc.type === DocTypes.documentFile) {
        const name = pathToName(doc.path);
        setDocument({
          type: doc.type,
          name,
          path: doc.path,
          bytes: doc.bytes,
          modified: doc.modified,
          extradata: doc.extradata,
        });
        push({ search: `?folder=${currentPath}&modal=${modalQuerys.documentsFile}` });
      }
    };
  };

  return (
    <>
      <DeleteModal />
      <RenameModal />
      <FileModal />
      <CreateFolderModal />
      {(currentDocument || !!selected.length) && (
        <ShareModal folderName={currentDocument?.name || 'documents'} />
      )}
      <DocumentsTable
        toolbar
        popover
        itemsTotal={itemsTotal}
        rows={rows}
        handleChange={handleChange}
        handleOpen={handleOpen}
        handleGoMainFolder={handleGoMainFolder}
      />
    </>
  );
};

export default Documents;
