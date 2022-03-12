import React from 'react';
import { useTranslation } from 'react-i18next';
import { Form, useFormikContext } from 'formik';
import { Button, MenuItem } from '@material-ui/core';

import { FormCheckbox, Select } from '@components';

import { Styled } from './GeneralSettings.styled';

const GeneralSettingsForm: React.FC = () => {
  const { t } = useTranslation('accountSettings');
  const formik = useFormikContext();

  return (
    <>
      <Form>
        <Styled.Container>
          <Styled.FormInput
            name="name"
            label={t('form.general.name.label')}
            placeholder={t('form.general.name.placeholder')}
          />
          <Styled.FormInput
            name="email"
            label={t('form.general.email.label')}
            placeholder={t('form.general.email.placeholder')}
          />

          <FormCheckbox name="receiveNotifications" label={t('form.general.checkbox')} />

          <Select name="language">
            <MenuItem value="en">English</MenuItem>
            <MenuItem value="ko">Korean</MenuItem>
          </Select>
          <Styled.ButtonWrapper>
            <Button color="primary" variant="contained" disabled={!formik.isValid}>
              {t('form.general.submit')}
            </Button>
          </Styled.ButtonWrapper>
        </Styled.Container>
      </Form>
    </>
  );
};

export default GeneralSettingsForm;
