import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Form, Formik } from 'formik';

import { Editor, FormCheckbox, FormWrapper } from '@components';
import { toaster } from '@helpers';
import { initialValues } from './TermsModal.constants';
import { SetFieldValueProps, TermsModalProps } from './TermsModal.types';
import { useValidationSchema } from './TermsModal.validation';

import { Styled } from './TermsModal.styled';

const TermsModal: FC<TermsModalProps> = ({ closeModal }) => {
  const { t } = useTranslation('companySettings');
  const validationSchema = useValidationSchema();
  const handleSubmit = () => {
    toaster('submit function is not realized', 'error');
  };

  return (
    <Styled.MainWrapper>
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
              <FormWrapper>
                <FormCheckbox
                  name="useTerms"
                  label={t('terms_modal.use_terms.label')}
                  labelPlacement="end"
                />
                <Editor
                  name="editor"
                  setFieldValue={setFieldValue}
                  placeholder={t('terms_modal.editor.placeholder')}
                />
                <Styled.ActionsWrapper>
                  <Styled.ButtonWrapper onClick={closeModal}>
                    {t('terms_modal.cancel_button')}
                  </Styled.ButtonWrapper>
                  <Styled.ButtonWrapper type="submit" isApply>
                    {t('terms_modal.apply_button')}
                  </Styled.ButtonWrapper>
                </Styled.ActionsWrapper>
              </FormWrapper>
            </Form>
          );
        }}
      </Formik>
    </Styled.MainWrapper>
  );
};

export default TermsModal;
