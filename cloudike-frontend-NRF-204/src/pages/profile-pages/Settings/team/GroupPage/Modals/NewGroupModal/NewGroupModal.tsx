import React, { useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory, useLocation } from 'react-router-dom';
import { Formik, FormikValues } from 'formik';

import { useCreateGroupMutation } from '@api';
import { toaster } from '@helpers';
import { useModal } from '@hooks';
import { modalQuerys, paths as settingsPaths } from '@utils/routes/settings-routes';
import { NewGroupForm } from './NewGroupForm';
import { initialValues } from './NewGroupModal.constants';
import { Props } from './NewGroupModal.types';
import { useValidationSchema } from './NewGroupModal.validation';

import { Styled } from '../Modal.styled';

const NewGroupModal: React.FC<Props> = ({ refetch }) => {
  const { t } = useTranslation('groupPage');
  const validationSchema = useValidationSchema();
  const { push } = useHistory();
  const [createGroupMutation] = useCreateGroupMutation();
  const { RenderModal, isOpen, setIsOpen } = useModal(settingsPaths.teamGroup, true);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const Modal = useMemo(() => RenderModal, [isOpen]);

  const { search } = useLocation();

  const query = useMemo(() => new URLSearchParams(search), [search]);

  useEffect(() => {
    if (query.get('modal') === modalQuerys.teamGroupCreate) {
      setIsOpen(true);
    } else if (isOpen) {
      setIsOpen(false);
    }
  }, [isOpen, query, setIsOpen]);

  const handleSubmit = (values: FormikValues) => {
    try {
      createGroupMutation({
        variables: { name: values.name },
      }).then(() => {
        refetch().then(() => {
          push(`/${settingsPaths.teamGroup}`);
        });
      });
    } catch (e) {
      toaster(t('newGroupModal.errorMessage'), 'error');
    }
  };

  return (
    <Modal title={t('newGroupModal.title')}>
      <Styled.ModalContainer>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          validateOnBlur
          validateOnChange
        >
          <NewGroupForm />
        </Formik>
      </Styled.ModalContainer>
    </Modal>
  );
};

export default NewGroupModal;
