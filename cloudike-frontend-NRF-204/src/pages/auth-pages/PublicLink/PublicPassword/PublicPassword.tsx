import React, { FC, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { Form, Formik } from 'formik';

import { FormWrapper, Input } from '@components';
import { useModal } from '@hooks';
import { modalQuerys } from '@utils/routes/profile-routes';
import { initialValues } from './PublicPassword.utils';
import { useValidationSchema } from './PublicPassword.validation';
import { PasswordEvent } from './publicPasswordTypes';
import usePublicPasswordTranslation from './usePublicPasswordTranslation';

import 'date-fns';
import { Styled } from '../PublicLink.styled';

const PublicPassword: FC<{ slug: string; postPassword: any; secureMetadata?: any }> = ({
  slug,
  postPassword,
  secureMetadata,
}) => {
  const { RenderModal, isOpen, setIsOpen } = useModal(`public/${slug}`, false);
  const { password, passwordTitle, cancel, confirm } = usePublicPasswordTranslation();
  const validationSchema = useValidationSchema();
  const Modal = useMemo(() => RenderModal, [isOpen]);

  const { search } = useLocation();

  const queryModal = new URLSearchParams(search).get('modal');

  useEffect(() => {
    if (queryModal === modalQuerys.publicLinkPassword) {
      setIsOpen(true);
    } else if (secureMetadata?.data) {
      setIsOpen(false);
    }
  }, [queryModal, setIsOpen, secureMetadata]);

  const handlePassword = (e: PasswordEvent) => {
    postPassword(e);
  };

  return (
    <Modal>
      <Styled.ModalWrapper>
        <Styled.ModalTitle>{password}</Styled.ModalTitle>
        <Styled.ModalText>{passwordTitle}</Styled.ModalText>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handlePassword}
          validateOnChange
          validateOnBlur
        >
          {(formik) => (
            <Form>
              <FormWrapper>
                <Input name="password" type="password" />
                <Styled.ModalButtonsWrapper>
                  <Styled.CancelButton type="button" trans>
                    {cancel}
                  </Styled.CancelButton>
                  <Styled.SignButton type="submit" disabled={!formik.isValid} trans={false}>
                    {confirm}
                  </Styled.SignButton>
                </Styled.ModalButtonsWrapper>
              </FormWrapper>
            </Form>
          )}
        </Formik>
      </Styled.ModalWrapper>
    </Modal>
  );
};

export default PublicPassword;
