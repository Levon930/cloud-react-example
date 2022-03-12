import React from 'react';
import { useTranslation } from 'react-i18next';
import { Formik, FormikValues } from 'formik';
import { Divider } from '@material-ui/core';

import { useUpdatePasswordMutation } from '@api';
import { SettingsPageWrapper } from '@components';
import { toaster } from '@helpers';
import { initialValues } from './SetPassword.constants';
import { useValidationSchema } from './SetPassword.validation';
import SetPasswordForm from './SetPasswordForm';

const BasicSettings: React.FC = () => {
  const { t } = useTranslation('accountSettings');
  const validationSchema = useValidationSchema();
  const [updatePassword] = useUpdatePasswordMutation();
  const handleSubmit = (values: FormikValues) => {
    updatePassword({
      variables: {
        newPassword: values.newPassword,
      },
    })
      .then(() => {
        toaster('Password has been updated', 'success');
      })
      .catch(() => {
        toaster('Error while updating password', 'error');
      });
  };

  return (
    <>
      <SettingsPageWrapper title={t('form.setPassword.title')} />
      <Divider />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        validateOnChange
        validateOnBlur
      >
        <SetPasswordForm />
      </Formik>
    </>
  );
};

export default BasicSettings;
