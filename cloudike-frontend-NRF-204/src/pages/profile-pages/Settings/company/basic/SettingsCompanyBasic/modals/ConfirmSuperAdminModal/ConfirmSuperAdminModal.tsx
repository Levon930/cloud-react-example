import React from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';

import { useCompanySuperAdministratorChangeMutation } from '@api';
import { toaster } from '@helpers';
import { useAuth, useModal, useQueryParams } from '@hooks';
import { paths as settingsPaths } from '@utils/routes/settings-routes';

import { Styled } from './ConfirmSuperAdminModal.styled';

const ConfirmSuperAdminModal: React.FC = () => {
  const { push } = useHistory();
  const { RenderModal } = useModal();
  const { handleLogout } = useAuth();

  const queryParams = useQueryParams();

  const [CompanySuperAdministratorChangeMutation] = useCompanySuperAdministratorChangeMutation();

  const { t } = useTranslation('companySettings');

  const acceptModifySuperAdmin = async () => {
    const paramID = queryParams.get('id');
    if (paramID !== null) {
      try {
        await CompanySuperAdministratorChangeMutation({
          variables: {
            id: Number(paramID),
          },
        });
        handleLogout();
      } catch (e) {
        toaster(t('change_admin_modals.confirm_super_admin.submitErrorMessage'), 'error');
      }
    } else {
      toaster('User not defined', 'error');
      push(`/${settingsPaths.changeSuperAdminModal}`);
    }
  };

  return (
    <RenderModal title="Change super administrator">
      <>
        <Styled.ModalInfo>
          {t('change_admin_modals.confirm_super_admin.modal_info')}
        </Styled.ModalInfo>
        <Styled.ButtonContainer>
          <Button
            color="secondary"
            variant="outlined"
            onClick={() => push(`/${settingsPaths.companySettingsBasic}`)}
          >
            {t('change_admin_modals.confirm_super_admin.cancel_button')}
          </Button>
          <Button color="primary" variant="contained" onClick={acceptModifySuperAdmin}>
            {t('change_admin_modals.confirm_super_admin.apply_button')}
          </Button>
        </Styled.ButtonContainer>
      </>
    </RenderModal>
  );
};

export default ConfirmSuperAdminModal;
