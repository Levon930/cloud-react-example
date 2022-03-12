import React, { useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory, useLocation } from 'react-router-dom';
import { Formik, FormikValues } from 'formik';

import { useRenameFileOrFolderMutation } from '@api';
import { useReactiveVar } from '@apollo/client';
import { getExtension } from '@components';
import { toaster } from '@helpers';
import { useModal } from '@hooks';
import { documentCurrentPathVar, documentVar } from '@store';
import { modalQuerys, paths } from '@utils/routes/profile-routes';
import { initialValues } from './RenameModal.constants';
import { useValidationSchema } from './RenameModal.validation';
import { RenameModalForm } from './RenameModalForm';

import { Styled } from '../Modal.styled';

const RenameModal = () => {
  const { t } = useTranslation('documents');
  const validationSchema = useValidationSchema();
  const { push } = useHistory();
  const currentPath = useReactiveVar(documentCurrentPathVar);
  const [rename] = useRenameFileOrFolderMutation({ refetchQueries: ['Documents'] });
  const { RenderModal, isOpen, setIsOpen } = useModal(
    `${paths.documents}?folder=${currentPath}`,
    true,
  );
  const currentDocument = useReactiveVar(documentVar);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const Modal = useMemo(() => RenderModal, [isOpen]);

  const { search } = useLocation();

  const queryModal = new URLSearchParams(search).get('modal');

  useEffect(() => {
    if (queryModal === modalQuerys.documentsRename) {
      setIsOpen(true);
    } else if (isOpen) {
      setIsOpen(false);
    }
  }, [isOpen, queryModal, setIsOpen]);

  const handleSubmit = async (values: FormikValues) => {
    try {
      if (currentDocument) {
        if (currentDocument.type === 'DocumentFolder') {
          await rename({
            variables: {
              path: currentDocument.path,
              newname: values.name,
            },
          });

          push({ search: `?folder=${currentPath}` });
        } else if (currentDocument.type === 'DocumentFile') {
          await rename({
            variables: {
              path: currentDocument.path,
              newname: `${values.name}.${getExtension(currentDocument.path)}`,
            },
          });

          push({ search: `?folder=${currentPath}` });
        }
      }
    } catch (e) {
      toaster(t('errorMessages.renameModal'), 'error');
    }
  };

  return (
    <Modal title={t('renameFolder.title')}>
      <Styled.ModalContainer>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          validateOnBlur
          validateOnChange
        >
          <RenameModalForm />
        </Formik>
      </Styled.ModalContainer>
    </Modal>
  );
};

export default RenameModal;
