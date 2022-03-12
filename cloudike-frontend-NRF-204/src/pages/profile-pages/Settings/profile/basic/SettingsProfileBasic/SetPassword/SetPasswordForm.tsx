import React from 'react';
import { useTranslation } from 'react-i18next';
import { Form, useFormikContext } from 'formik';
import { Button } from '@material-ui/core';

import { Styled } from './SetPassword.styled';

const SetPasswordForm: React.FC = () => {
  const { t } = useTranslation('accountSettings');
  const formik = useFormikContext();

  return (
    <Form>
      <Styled.Container>
        <Styled.FormInput
          name="currentPassword"
          label={t('form.setPassword.currentPassword.label')}
          placeholder={t('form.setPassword.currentPassword.placeholder')}
          type="password"
        />
        <Styled.FormInput
          name="newPassword"
          label={t('form.setPassword.newPassword.label')}
          placeholder={t('form.setPassword.newPassword.placeholder')}
          type="password"
        />
        <Styled.FormInput
          name="checkNewPassword"
          label={t('form.setPassword.checkNewPassword.label')}
          placeholder={t('form.setPassword.checkNewPassword.placeholder')}
          type="password"
        />

        <Styled.ButtonWrapper>
          <Button color="primary" variant="contained" disabled={!formik.isValid} type="submit">
            {t('form.general.submit')}
          </Button>
        </Styled.ButtonWrapper>
      </Styled.Container>
    </Form>
  );
};

export default SetPasswordForm;
