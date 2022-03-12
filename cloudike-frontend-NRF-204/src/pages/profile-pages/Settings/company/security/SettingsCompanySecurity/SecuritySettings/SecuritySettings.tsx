import React from 'react';
import { useTranslation } from 'react-i18next';
import { Formik } from 'formik';
import { Divider } from '@material-ui/core';

import { SettingsPageWrapper } from '@components';
import { toaster } from '@helpers';
import { initialValues } from './SecuritySettings.constants';
import CompanySecuritySettingsForm from './SecuritySettingsForm';

const CompanySecuritySettings: React.FC = () => {
  const { t } = useTranslation('companySettings');

  const handleSubmit = () => {
    toaster('submit function is not realized', 'error');
  }; // TODO: proceed with mutation

  return (
    <>
      <SettingsPageWrapper title={t('form.first.title')} />
      <Divider />
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <CompanySecuritySettingsForm />
      </Formik>
    </>
  );
};

export default CompanySecuritySettings;
