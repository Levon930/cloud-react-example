import React, { useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory, useLocation } from 'react-router-dom';
import { Formik, FormikValues } from 'formik';

import { useChangeUserPasswordMutation } from '@api';
import { useReactiveVar } from '@apollo/client';
import { toaster } from '@helpers';
import { useModal } from '@hooks';
import { teamSelectedVar, userVar } from '@store';
import { modalQuerys, paths as settingsPaths } from '@utils/routes/settings-routes';
import { initialValues } from './ChangePasswordModal.constants';
import { ModalProps } from './ChangePasswordModal.types';
import { useValidationSchema } from './ChangePasswordModal.validation';
import DeleteAccountModalForm from './ChangePasswordModalForm';

import { Styled } from './ChangePasswordModal.styled';

const ChangePasswordModal: React.FC<ModalProps> = ({ refetch }) => {
  const { name, userid } = useReactiveVar(userVar) || {};
  const teamSelected = useReactiveVar(teamSelectedVar);
  const { push } = useHistory();
  const { t } = useTranslation('teamPage');
  const validationSchema = useValidationSchema();
  const [changePassword] = useChangeUserPasswordMutation();
  const { RenderModal, isOpen, setIsOpen } = useModal(settingsPaths.teamMember, true);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const Modal = useMemo(() => RenderModal, [isOpen]);

  const { search } = useLocation();

  const query = useMemo(() => new URLSearchParams(search), [search]);

  useEffect(() => {
    if (query.get('modal') === modalQuerys.teamMemberChangePassword) {
      setIsOpen(true);
    } else if (isOpen) {
      setIsOpen(false);
      userVar(null);
    }
  }, [isOpen, query, setIsOpen]);

  const handleSubmit = async (values: FormikValues) => {
    try {
      if (userid) {
        changePassword({ variables: { user_id: userid, new_password: values.newPassword } }).then(
          () => {
            refetch().then(() => {
              push(`/${settingsPaths.teamMember}`);
            });
          },
        );
      } else {
        await Promise.all(
          teamSelected.map(({ userid }) => {
            return changePassword({
              variables: { user_id: userid, new_password: values.newPassword },
            });
          }),
        );
        await refetch();
        teamSelectedVar([]);
        push(`/${settingsPaths.teamMember}`);
      }
    } catch (e) {
      toaster(t('changePassword.errorMessage'), 'error');
    }
  };

  return (
    <>
      <Modal
        title={`${t('changePassword.title.firstPart')} ${
          (name || 'users') + t('changePassword.title.secondPart')
        }`}
      >
        <Styled.ModalFormWrapper>
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
            validateOnBlur
            validateOnChange
          >
            <DeleteAccountModalForm />
          </Formik>
        </Styled.ModalFormWrapper>
      </Modal>
    </>
  );
};

export default ChangePasswordModal;
