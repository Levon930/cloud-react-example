import React from 'react';
import { useTranslation } from 'react-i18next';
import { Formik } from 'formik';
import { Divider } from '@material-ui/core';

import { SettingsPageWrapper } from '@components';
import { toaster } from '@helpers';
import { initialValues } from './SignIn.constants';
import SignInForm from './SignInForm';
import { useValidationSchema } from './SingIn.validation';

const SignIn: React.FC = () => {
  const { t } = useTranslation('companySettings');
  const validationSchema = useValidationSchema();

  const handleSubmit = () => {
    toaster('submit function is not realized', 'error');
  }; // TODO: proceed with mutation

  return (
    <>
      <SettingsPageWrapper title={t('form.second.title')} />
      <Divider />
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        validateOnChange
        validateOnBlur
      >
        <SignInForm />
      </Formik>
    </>
  );
};

export default SignIn;
