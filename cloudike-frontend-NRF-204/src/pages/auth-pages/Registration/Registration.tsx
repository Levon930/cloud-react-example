import React from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { Form, Formik } from 'formik';
import { Box, Button } from '@material-ui/core';

import { useCreateCompanyMutation } from '@api';
import { FormWrapper } from '@components';
import { Input } from '@components/form-components/Input';
import { WithLoading } from '@components/WithLoading';
import { toaster } from '@helpers';
import { assets, AuthLayoutStyled } from '@layouts/AuthLayout';
import { paths } from '@utils/routes/auth-routes';
import { initialValues } from './Registration.constants';
import { useValidationSchema } from './Registration.validation';

import { Styled } from './Registration.styled';

const Registration: React.FC = () => {
  const { t } = useTranslation('registration');
  const validationSchema = useValidationSchema();
  const history = useHistory();
  const [registrationMutation, { loading }] = useCreateCompanyMutation();

  const handleSubmit = async (values: any) => {
    try {
      const { ...submitValues } = values;
      await registrationMutation({
        variables: submitValues,
      });
      history.push(paths.login);
    } catch (e) {
      toaster(t('form.errorMessage'), 'error');
    }
  };

  return (
    <AuthLayoutStyled.LayoutContainer>
      <AuthLayoutStyled.BannerContainer>
        <Box>
          <img src={assets.authBanner} alt="auth-banner" />
        </Box>
      </AuthLayoutStyled.BannerContainer>
      <AuthLayoutStyled.FormSideContainer>
        <WithLoading loading={loading}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            validateOnBlur
            validateOnChange
          >
            {(formik) => {
              return (
                <Form>
                  <FormWrapper>
                    <Input
                      name="name"
                      label={t('form.name.label')}
                      placeholder={t('form.name.placeholder')}
                    />
                    <Input
                      name="company_name"
                      label={t('form.company_name.label')}
                      placeholder={t('form.company_name.placeholder')}
                    />
                    <Styled.InputWrapper>
                      <Input
                        name="company_domain"
                        label={t('form.company_domain.label')}
                        placeholder={t('form.company_domain.placeholder')}
                      />
                      <Styled.DomainText>.cloudike.kr</Styled.DomainText>
                    </Styled.InputWrapper>
                    <Input
                      name="email"
                      label={t('form.email.label')}
                      placeholder={t('form.email.placeholder')}
                    />
                    <Input
                      name="password"
                      label={t('form.password.label')}
                      type="password"
                      placeholder={t('form.password.placeholder')}
                    />
                    <Input
                      name="confirmPassword"
                      label={t('form.confirm_password.label')}
                      type="password"
                      placeholder={t('form.confirm_password.placeholder')}
                    />
                    <Input
                      name="lang"
                      label={t('form.lang.label')}
                      placeholder={t('form.lang.placeholder')}
                    />
                    <Styled.ButtonWrapper>
                      <Button
                        color="primary"
                        variant="contained"
                        disabled={!formik.isValid}
                        type="submit"
                      >
                        {t('form.submit')}
                      </Button>
                    </Styled.ButtonWrapper>
                  </FormWrapper>
                </Form>
              );
            }}
          </Formik>
        </WithLoading>
      </AuthLayoutStyled.FormSideContainer>
    </AuthLayoutStyled.LayoutContainer>
  );
};

export default Registration;
