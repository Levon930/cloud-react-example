import React from 'react';
import { useTranslation } from 'react-i18next';
import { Form, Formik } from 'formik';
import { Box, Button, Divider } from '@material-ui/core';

import { Dropzone } from '@components/form-components';
import { toaster } from '@helpers';
import { initialValues } from './CustomSettings.constants';
import { SetFieldValueProps } from './CustomSettings.types';
import { useValidationSchema } from './CustomSettings.validation';

import { Styled } from './CustomSettings.styled';

const CustomSettings: React.FC = () => {
  const { t } = useTranslation('companySettings');
  const validationSchema = useValidationSchema();

  const handleSubmit = () => {
    toaster('submit function is not realized', 'error');
  };

  return (
    <Styled.Container>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        validateOnChange
        validateOnBlur
      >
        {({ setFieldValue }: SetFieldValueProps) => {
          return (
            <Form>
              <Styled.TitleWrapper>{t('customSettings.company_logo')}</Styled.TitleWrapper>
              <Divider />
              <Styled.TitleWrapper>{t('customSettings.company_name')}</Styled.TitleWrapper>
              <Styled.DropzonAreaWrapper>
                <Dropzone name="dropzone" setFieldValue={setFieldValue} />
                <Box>{t('customSettings.upload_terms')}</Box>
                <Styled.Actions>
                  <Button color="primary" variant="contained" type="submit">
                    {t('customSettings.apply_button')}
                  </Button>
                </Styled.Actions>
              </Styled.DropzonAreaWrapper>
            </Form>
          );
        }}
      </Formik>
    </Styled.Container>
  );
};

export default CustomSettings;
