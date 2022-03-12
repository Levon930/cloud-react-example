import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Formik } from 'formik';
import { Button } from '@material-ui/core';

import { useAuth, useModal } from '@hooks';
import { paths } from '@utils/routes/settings-routes';
import { initialValues } from './DeleteAccountModal.constants';
import { useValidationSchema } from './DeleteAccountModal.validation';
import DeleteAccountModalForm from './DeleteAccountModalForm';
import useDeleteAccountModalTranslation from './useDeleteAccountModalTranslation';

import { Styled } from './DeleteAccountModal.styled';

const DeleteAccountModal: React.FC = () => {
  const { setIsOpen, RenderModal } = useModal();
  const { push, location } = useHistory();
  const { handleLogout } = useAuth();
  const validationSchema = useValidationSchema();
  const { title } = useDeleteAccountModalTranslation();

  const handleOpenDeleteAccount = () => {
    push(paths.companySettingsBasicDeleteAccount);
    setIsOpen(true);
  };

  useEffect(() => {
    if (location.pathname === paths.companySettingsBasicDeleteAccount) {
      setIsOpen(true);
    }
  }, [location.pathname, setIsOpen]);

  const handleSubmit = () => {
    handleLogout();
  };

  return (
    <>
      <Button color="primary" variant="contained" type="button" onClick={handleOpenDeleteAccount}>
        Delete Account
      </Button>
      <RenderModal title={title}>
        <Styled.ModalFormWrapper>
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
            validateOnBlur
            validateOnChange
          >
            <DeleteAccountModalForm setIsOpen={setIsOpen} />
          </Formik>
        </Styled.ModalFormWrapper>
      </RenderModal>
    </>
  );
};

export default DeleteAccountModal;
