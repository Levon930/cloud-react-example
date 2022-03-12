import React from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { Form, FormikValues, useFormikContext } from 'formik';
import { Button } from '@material-ui/core';

import { paths as settingsPaths } from '@utils/routes/settings-routes';

import { Styled } from './ChangePasswordModal.styled';

const ChangePasswordModalForm: React.FC = () => {
  const { t } = useTranslation('teamPage');
  const { push } = useHistory();
  const { isValid }: FormikValues = useFormikContext();

  const handleBack = () => {
    push(`/${settingsPaths.teamMember}`);
  };

  return (
    <Form>
      <Styled.Input
        name="newPassword"
        label=""
        placeholder={t('changePassword.newPassword')}
        type="password"
      />
      <Styled.Input
        name="reEnterPassword"
        label=""
        placeholder={t('changePassword.reEnterPassword')}
        type="password"
      />
      <Styled.ButtonsWrapper>
        <Button color="secondary" variant="outlined" type="button" onClick={handleBack}>
          {t('changePassword.cancel')}
        </Button>
        <Button color="primary" variant="contained" disabled={!isValid} type="submit">
          {t('changePassword.apply')}
        </Button>
      </Styled.ButtonsWrapper>
    </Form>
  );
};

export default ChangePasswordModalForm;
