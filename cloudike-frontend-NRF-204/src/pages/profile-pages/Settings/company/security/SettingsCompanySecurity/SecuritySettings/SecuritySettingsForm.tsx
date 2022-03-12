import React from 'react';
import { useTranslation } from 'react-i18next';
import { Form } from 'formik';
import { Button } from '@material-ui/core';

import { FormCheckbox } from '@components';

import { Styled } from './SecuritySettings.styled';

const CompanySecuritySettingsForm: React.FC = () => {
  const { t } = useTranslation('companySettings');

  return (
    <Form>
      <Styled.Container>
        <FormCheckbox
          labelPlacement="end"
          name="allowLink"
          label={t('form.first.checkboxGroup.checkbox1')}
        />
        <FormCheckbox
          labelPlacement="end"
          name="allowCreation"
          label={t('form.first.checkboxGroup.checkbox2')}
        />
        <FormCheckbox
          labelPlacement="end"
          name="allowOnly"
          label={t('form.first.checkboxGroup.checkbox3')}
        />
        <Styled.ButtonWrapper>
          <Button color="primary" variant="contained">
            {t('form.first.submit')}
          </Button>
        </Styled.ButtonWrapper>
      </Styled.Container>
    </Form>
  );
};

export default CompanySecuritySettingsForm;
