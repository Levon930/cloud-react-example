import React, { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory, useLocation } from 'react-router-dom';
import { Formik } from 'formik';
import { Button } from '@material-ui/core';

import { useInviteUserMutation } from '@api';
import { toaster } from '@helpers';
import { useModal } from '@hooks';
import { modalQuerys, paths as settingsPaths } from '@utils/routes/settings-routes';
import { InviteMemberForm } from './InviteMemberForm';
import { initialValues } from './InviteMemberModal.constants';
import { HandleSubmitArgs, Props } from './InviteMemberModal.types';
import { validationSchema } from './InviteMemberModal.validation';

import { Styled } from '../Modal.styled';

const InviteMemberModal: React.FC<Props> = ({ refetch }) => {
  const { t } = useTranslation('teamPage');
  const [emails, setEmails] = useState<string[]>([]);
  const [language, setLanguage] = useState<string>('en');
  const { push } = useHistory();
  const [inviteUser] = useInviteUserMutation();

  const { RenderModal, isOpen, setIsOpen } = useModal(settingsPaths.teamMember, true);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const Modal = useMemo(() => RenderModal, [isOpen]);

  const { search } = useLocation();

  const query = useMemo(() => new URLSearchParams(search), [search]);

  useEffect(() => {
    if (query.get('modal') === modalQuerys.teamMemberInvite) {
      setIsOpen(true);
    } else if (isOpen) {
      setIsOpen(false);
    }
  }, [isOpen, query, setIsOpen]);

  const handleSubmit: HandleSubmitArgs = (values, { resetForm }) => {
    setEmails((prev) => {
      const emailArr = [...prev, values.email];

      return Array.from(new Set(emailArr));
    });
    setLanguage(values.invitationLang);
    resetForm();
  };

  const sentInvitation = async () => {
    try {
      await Promise.all(
        emails.map((email) => {
          return inviteUser({
            variables: {
              lang: language,
              login: `email:${email}`,
            },
          });
        }),
      );
      await refetch();
      push(`/${settingsPaths.teamMember}`);
    } catch (e) {
      toaster(t('inviteMember.errorMessage'), 'error');
    }
  };

  const handleBack = () => {
    push(`/${settingsPaths.teamMember}`);
  };

  return (
    <Modal title={t('inviteMember.title')}>
      <Styled.ModalContainer>
        <Styled.ModalDescription>{t('inviteMember.description')}</Styled.ModalDescription>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          validateOnBlur
          validateOnChange
        >
          <InviteMemberForm emails={emails} setEmails={setEmails} setIsOpen={setIsOpen} />
        </Formik>
        <Styled.ButtonContainer>
          <Button color="secondary" variant="outlined" onClick={handleBack}>
            {t('inviteMember.buttons.cancel')}
          </Button>
          <Button
            color="primary"
            variant="contained"
            disabled={!emails.length}
            onClick={sentInvitation}
          >
            {t('inviteMember.buttons.submit')}
          </Button>
        </Styled.ButtonContainer>
      </Styled.ModalContainer>
    </Modal>
  );
};

export default InviteMemberModal;
