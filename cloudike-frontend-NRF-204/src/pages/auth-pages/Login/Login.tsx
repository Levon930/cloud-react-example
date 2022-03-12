import React from 'react';
import { useTranslation } from 'react-i18next';
import { Form, Formik } from 'formik';
import { Box, Button } from '@material-ui/core';

import { FormCheckbox, FormWrapper, Input } from '@components';
import { WithLoading } from '@components/WithLoading';
import { useAuth } from '@hooks';
import { assets, AuthLayoutStyled } from '@layouts/AuthLayout';
import { initialValues } from './constants';
import { useValidationSchema } from './Login.validation';

import { Styled } from './Login.styled';

const Login: React.FC = () => {
  const { t } = useTranslation('auth');
  const { handleLogin, loading } = useAuth();
  const validationSchema = useValidationSchema();

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
            onSubmit={handleLogin}
            validateOnChange
            validateOnBlur
          >
            {(formik) => (
              <Form>
                <FormWrapper>
                  <Input
                    name="login"
                    label={t('form.login.label')}
                    placeholder={t('form.login.placeholder')}
                  />
                  <Input
                    name="password"
                    label={t('form.password.label')}
                    placeholder={t('form.password.placeholder')}
                    type="password"
                  />
                  <FormCheckbox
                    name="permanent_auth"
                    label={t('form.checkbox')}
                    labelPlacement="start"
                  />
                  <Styled.SubmitWrapper>
                    <Button
                      color="primary"
                      variant="contained"
                      disabled={!formik.isValid}
                      type="submit"
                    >
                      {t('form.submit')}
                    </Button>
                  </Styled.SubmitWrapper>
                </FormWrapper>
              </Form>
            )}
          </Formik>
        </WithLoading>
      </AuthLayoutStyled.FormSideContainer>
    </AuthLayoutStyled.LayoutContainer>
  );
};

export default Login;
