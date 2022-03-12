import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Formik, FormikValues } from 'formik';
import { Divider } from '@material-ui/core';

import { useAccountBasicSettingsQuery, useUpdateAccountBasicSettingsMutation } from '@api';
import { SettingsPageWrapper } from '@components';
import { toaster } from '@helpers';
import { initialValues } from './GeneralSettings.constants';
import { useValidationSchema } from './GeneralSettings.validation';
import GeneralSettingsForm from './GeneralSettingsForm';

const BasicSettings: React.FC = () => {
  const { t } = useTranslation('accountSettings');
  const validationSchema = useValidationSchema();
  const { data, loading }: any = useAccountBasicSettingsQuery();
  const [fields, setFields] = useState(initialValues);
  const [updateAccountSettings] = useUpdateAccountBasicSettingsMutation();

  useEffect(() => {
    if (loading) {
      return;
    }
    try {
      setFields({
        name: data.getUser.name,
        email: data.getUser.alert_email,
        receiveNotifications: !data.getUser.disable_alert,
        language: data.getUser.lang,
      });
    } catch (e) {
      toaster(t('form.general.errorMessage'), 'error');
    }
  }, [loading, setFields, data]);

  const handleSubmit = (values: FormikValues) => {
    updateAccountSettings({
      variables: {
        userId: data.getUser.userid,
        name: values.name,
        alertEmail: values.email,
        disableAlert: !values.receiveNotifications,
        lang: values.language,
      },
    })
      .then(() => {
        toaster('Data has been updated', 'success');
      })
      .catch(() => {
        toaster('Error while updating', 'error');
      });
  };

  return (
    <>
      <SettingsPageWrapper title={t('form.general.title')} />
      <Divider />
      <Formik
        enableReinitialize
        initialValues={fields}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        validateOnChange
        validateOnBlur
      >
        <GeneralSettingsForm />
      </Formik>
    </>
  );
};

export default BasicSettings;
