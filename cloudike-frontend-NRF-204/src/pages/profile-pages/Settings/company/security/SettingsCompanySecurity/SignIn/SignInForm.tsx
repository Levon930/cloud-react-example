import React from 'react';
import { useTranslation } from 'react-i18next';
import { Form, FormikValues, useFormikContext } from 'formik';
import { Button, InputLabel, MenuItem } from '@material-ui/core';
import { InfoOutlined } from '@material-ui/icons';

import { FormCheckbox, RadioGroup, Select } from '@components';

import { Styled } from './SignIn.styled';

const SignInForm: React.FC = () => {
  const { t } = useTranslation('companySettings');
  const { values, isValid }: FormikValues = useFormikContext();

  const radioItems = [
    { name: t('form.second.radioGroup.radio1'), id: '1' },
    { name: t('form.second.radioGroup.radio2'), id: '2' },
  ];

  return (
    <Form>
      <Styled.Container>
        <Styled.RadioGroupWrapper>
          <RadioGroup
            label={t('form.second.radioGroupTitle')}
            name="signInType"
            items={radioItems}
          />
          <Styled.Tooltip title={t('form.second.radioGroupInfo')}>
            <InfoOutlined />
          </Styled.Tooltip>
        </Styled.RadioGroupWrapper>
        {values.signInType === '2' ? (
          <>
            <Styled.InputWrapper>
              <Styled.FormInput
                name="LDAPserver"
                placeholder={t('form.second.LDAP.LDAPserver.placeholder')}
                label=""
              />
              <Styled.FormInput name="LDAPserver389" placeholder="" label="" />
            </Styled.InputWrapper>
            <Styled.FormInput
              name="LDAPBaseDN"
              placeholder={t('form.second.LDAP.LDAPBaseDN.placeholder')}
              label=""
            />
            <Styled.SelectWrapper>
              <InputLabel>{t('form.second.LDAP.LDAPEntry.label')}</InputLabel>
              <Select name="LDAPEntry">
                <MenuItem value={0}>{t('form.second.LDAP.LDAPEntry.option')}</MenuItem>
              </Select>
            </Styled.SelectWrapper>
            <Styled.ButtonContainer>
              <Button color="primary" variant="contained" disabled={!isValid} type="button">
                {t('form.second.LDAP.LDAPtest')}
              </Button>
            </Styled.ButtonContainer>
          </>
        ) : (
          ''
        )}
        <Styled.CheckboxWrapper>
          <FormCheckbox color="primary" name="autoSignOut" label={t('form.second.autoSignOut')} />
          <Styled.Tooltip title={t('form.second.autoSignOutInfo')}>
            <InfoOutlined />
          </Styled.Tooltip>
        </Styled.CheckboxWrapper>
        {values.autoSignOut && (
          <Styled.SelectWrapper>
            <Select name="minute">
              <MenuItem value={5}>{t('form.second.minute.option1')}</MenuItem>
              <MenuItem value={10}>{t('form.second.minute.option2')}</MenuItem>
              <MenuItem value={30}>{t('form.second.minute.option3')}</MenuItem>
              <MenuItem value={60}>{t('form.second.minute.option4')}</MenuItem>
            </Select>
            <InputLabel>{t('form.second.minute.title')}</InputLabel>
          </Styled.SelectWrapper>
        )}
        <Styled.SelectWrapper>
          <Select name="passwordExpirationDate">
            <MenuItem value={0}>{t('form.second.PasswordExpirationDate.notSet')}</MenuItem>
            <MenuItem value={1}>{t('form.second.PasswordExpirationDate.option1')}</MenuItem>
            <MenuItem value={3}>{t('form.second.PasswordExpirationDate.option2')}</MenuItem>
            <MenuItem value={6}>{t('form.second.PasswordExpirationDate.option3')}</MenuItem>
            <MenuItem value={12}>{t('form.second.PasswordExpirationDate.option4')}</MenuItem>
          </Select>
          <InputLabel>{t('form.second.PasswordExpirationDate.title')}</InputLabel>
        </Styled.SelectWrapper>
        <FormCheckbox
          labelPlacement="end"
          name="allowPassReuse"
          label={t('form.second.checkboxGroup.checkbox1')}
        />
        <FormCheckbox
          labelPlacement="end"
          color="primary"
          name="allowMobile"
          label={t('form.second.checkboxGroup.checkbox2')}
        />
        <Styled.ButtonContainer>
          <Button color="primary" variant="contained" type="submit">
            {t('form.first.submit')}
          </Button>
        </Styled.ButtonContainer>
        <Styled.ButtonWrapper>
          <div>
            <InputLabel>{t('form.second.settings.label')}</InputLabel>
            <Styled.Tooltip title={t('form.second.settings.settingsInfo')}>
              <InfoOutlined />
            </Styled.Tooltip>
          </div>
          <Styled.ButtonContainer>
            <Button color="secondary" variant="contained">
              {t('form.second.settings.title')}
            </Button>
          </Styled.ButtonContainer>
        </Styled.ButtonWrapper>
      </Styled.Container>
    </Form>
  );
};

export default SignInForm;
