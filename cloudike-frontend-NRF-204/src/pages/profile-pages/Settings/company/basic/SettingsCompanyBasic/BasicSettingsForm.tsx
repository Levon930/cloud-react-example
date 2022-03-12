import React from 'react';
import { useTranslation } from 'react-i18next';
import { Form, useFormikContext } from 'formik';
import { Button } from '@material-ui/core';

import { Input } from '@components/form-components/Input';

import { Styled } from './BasicSettings.styled';

const BasicSettingsForm: React.FC = () => {
  const { t } = useTranslation('companySettings');
  const { isValid } = useFormikContext();

  return (
    <Form>
      <Styled.Container>
        <Input
          name="companyName"
          label={t('form.settings.name.label')}
          placeholder={t('form.settings.name.placeholder')}
        />

        <Styled.InputWrapper>
          <Input
            name="companyDomain"
            label={t('form.settings.domain.label')}
            placeholder={t('form.settings.domain.placeholder')}
          />

          <Styled.DomainText>.cloudike.kr</Styled.DomainText>
        </Styled.InputWrapper>
        <Styled.ApplyWrapper>
          <Button color="primary" variant="contained" disabled={!isValid} type="submit">
            {t('form.settings.submit')}
          </Button>
        </Styled.ApplyWrapper>
      </Styled.Container>
    </Form>
  );
};
export default BasicSettingsForm;
