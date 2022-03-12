import React, { useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory, useLocation } from 'react-router-dom';
import { Formik, FormikValues } from 'formik';

import { useCreateFolderMutation } from '@api';
import { toaster } from '@helpers';
import { useModal } from '@hooks';
import { modalQuerys, paths } from '@utils/routes/profile-routes';
import { initialValues } from './CreateFolderModal.constants';
import { useValidationSchema } from './CreateFolderModal.validation';
import { SetStorageSizeModalForm } from './CreateFolderModalForm';

import { Styled } from '../Modal.styled';

const CreateFolderModal = () => {
  const { search } = useLocation();

  const queryModal = new URLSearchParams(search).get('modal');
  const currentPath = new URLSearchParams(search).get('folder');

  const { t } = useTranslation('documents');
  const validationSchema = useValidationSchema();
  const { push } = useHistory();
  const { RenderModal, isOpen, setIsOpen } = useModal(
    `${paths.documents}?folder=${currentPath}`,
    false,
  );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const Modal = useMemo(() => RenderModal, [isOpen]);

  const [createFolder] = useCreateFolderMutation({ refetchQueries: ['Documents'] });

  useEffect(() => {
    if (queryModal === modalQuerys.documentsCreate) {
      setIsOpen(true);
    } else if (isOpen) {
      setIsOpen(false);
    }
  }, [isOpen, queryModal, setIsOpen]);

  const handleSubmit = async ({ path }: FormikValues) => {
    try {
      await createFolder({
        variables: {
          path: currentPath !== '/' ? `${currentPath}/${path}` : `/${path}`,
        },
      });
      push({ search: `?folder=${currentPath}` });
    } catch (e) {
      toaster(t('errorMessages.createFolder'), 'error');
    }
  };

  return (
    <Modal title={`${t('createFolder.title')} `}>
      <Styled.ModalContainer>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          validateOnBlur
          validateOnChange
        >
          <SetStorageSizeModalForm />
        </Formik>
      </Styled.ModalContainer>
    </Modal>
  );
};

export default CreateFolderModal;
