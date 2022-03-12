import React from 'react';
import { useTranslation } from 'react-i18next';
import { Route } from 'react-router-dom';
import { Formik } from 'formik';
import { Button, Divider } from '@material-ui/core';

import { SettingsPageWrapper } from '@components/SettingsPageWrapper';
import { toaster } from '@helpers';
import { paths as settingsPaths } from '@utils/routes/settings-routes';
import { initialValues } from './BasicSettings.constants';
import { useValidationSchema } from './BasicSettings.validation';
import BasicSettingsForm from './BasicSettingsForm';
import { ChangeMiddleAdminModal, ChangeSuperAdminModal, ConfirmSuperAdminModal } from './modals';

import { Styled } from './BasicSettings.styled';

const BasicSettings: React.FC = () => {
  const { t } = useTranslation('companySettings');
  const validationSchema = useValidationSchema();

  const handleSubmit = () => {
    toaster('submit function is not realized', 'error');
  };

  return (
    <>
      <SettingsPageWrapper title={t('form.settings.title')} />
      <Styled.DividerWrapper>
        <Divider />
      </Styled.DividerWrapper>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        validateOnBlur
        validateOnChange
      >
        <BasicSettingsForm />
      </Formik>
      <Styled.Container>
        <Styled.AdminSettings>
          <div>{t('form.adminSettings.admin.super.title')}</div>
          <Styled.Link to={`/${settingsPaths.changeSuperAdminModal}`}>
            <Button color="secondary" variant="outlined" type="button">
              {t('form.adminSettings.submit')}
            </Button>
          </Styled.Link>
        </Styled.AdminSettings>
        <Styled.AdminSettings>
          <div>{t('form.adminSettings.admin.middle.title')}</div>
          <Styled.Link to={`/${settingsPaths.changeMiddleAdminModal}`}>
            <Button color="secondary" variant="outlined" type="button">
              {t('form.adminSettings.submit')}
            </Button>
          </Styled.Link>
        </Styled.AdminSettings>
      </Styled.Container>
      <Route path={`/${settingsPaths.changeSuperAdminModal}`}>
        <ChangeSuperAdminModal />
      </Route>
      <Route path={`/${settingsPaths.changeMiddleAdminModal}`}>
        <ChangeMiddleAdminModal />
      </Route>
      <Route path={`/${settingsPaths.confirmSuperAdminModal}`}>
        <ConfirmSuperAdminModal />
      </Route>
    </>
  );
};

export default BasicSettings;
