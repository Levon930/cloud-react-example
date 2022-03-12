import React, { useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory, useLocation } from 'react-router-dom';
import { Formik } from 'formik';

import { useCreateUserMutation } from '@api';
import { toaster } from '@helpers';
import { useModal } from '@hooks';
import { modalQuerys, paths as settingsPaths } from '@utils/routes/settings-routes';
import { CreateTeamMemberFrom } from './CreateTeamMemberFrom';
import { initialValues } from './CreateTeamMemberModal.constants';
import { Props, Values } from './CreateTeamMemberModal.types';
import { useValidationSchema } from './CreateTeamMemberModal.validation';

import { Styled } from '../Modal.styled';

const CreateTeamMemberModal: React.FC<Props> = ({ refetch }) => {
  const { t } = useTranslation('teamPage');
  const validationSchema = useValidationSchema();
  const [createUser] = useCreateUserMutation();
  const { push } = useHistory();
  const { RenderModal, isOpen, setIsOpen } = useModal(settingsPaths.teamMember, true);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const Modal = useMemo(() => RenderModal, [isOpen]);

  const { search } = useLocation();

  const query = useMemo(() => new URLSearchParams(search), [search]);

  useEffect(() => {
    if (query.get('modal') === modalQuerys.teamMemberCreate) {
      setIsOpen(true);
    } else if (isOpen) {
      setIsOpen(false);
    }
  }, [isOpen, query, setIsOpen]);

  const handleSubmit = async (values: Values) => {
    const { expirationDate, expirationDateInput, ...pureValues } = values;
    if (expirationDate) {
      const newUser = { ...pureValues };
      newUser.expired = new Date(expirationDateInput).getTime();
      await createUser({ variables: newUser });
    } else {
      await createUser({ variables: pureValues });
    }
    await refetch();
    push(`/${settingsPaths.teamMember}`);
    toaster(t('createTeamMemberModal.created'), 'success');
  };

  return (
    <Modal title={t('createTeamMemberModal.title')}>
      <Styled.ModalContainer>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          validateOnBlur
          validateOnChange
        >
          <CreateTeamMemberFrom />
        </Formik>
      </Styled.ModalContainer>
    </Modal>
  );
};

export default CreateTeamMemberModal;
