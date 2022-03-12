import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { Form, Formik } from 'formik';
import { Box, Button } from '@material-ui/core';

import { useRecoverLostPasswordMutation } from '@api';
import { WithLoading } from '@components';
import { FormWrapper, Input } from '@components/form-components';
import { toaster } from '@helpers';
import { assets, AuthLayoutStyled } from '@layouts/AuthLayout';
import { paths } from '@utils/routes/auth-routes';
import { validationSchema } from './ForgotPassword.validation';
import { initialValues } from './ForgotPasswords.constants';

import { Styled } from './ForgotPassword.styled';

const ForgotPassword: FC = () => {
  const history = useHistory();

  const { t } = useTranslation('auth');

  const [recoverLostPasswordMutation, { loading }] = useRecoverLostPasswordMutation();

  const handleSubmit = async (values: any) => {
    try {
      await recoverLostPasswordMutation({
        variables: {
          login: values.login,
        },
      });
      history.push(paths.login);
    } catch (e) {
      toaster(t('form.password.forgetPassword.errorMessage'), 'error');
    }
  };

  return (
    <AuthLayoutStyled.LayoutContainer>
      <AuthLayoutStyled.BannerContainer>
        <Box>
          <img src={assets.authBanner} alt="cloudike" />
        </Box>
      </AuthLayoutStyled.BannerContainer>
      <AuthLayoutStyled.FormSideContainer>
        <Box m={2}>
          <WithLoading loading={loading}>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values) => handleSubmit(values)}
              validateOnBlur
              validateOnChange
              validateOnMount
            >
              {(formik) => (
                <Form>
                  <FormWrapper>
                    <Input name="login" label="Email" placeholder="Some" />
                    <Styled.ButtonWrapper>
                      <Button
                        color="primary"
                        variant="contained"
                        disabled={!formik.isValid}
                        type="submit"
                      >
                        Send
                      </Button>
                    </Styled.ButtonWrapper>
                  </FormWrapper>
                </Form>
              )}
            </Formik>
          </WithLoading>
        </Box>
      </AuthLayoutStyled.FormSideContainer>
    </AuthLayoutStyled.LayoutContainer>
  );
};

export default ForgotPassword;
