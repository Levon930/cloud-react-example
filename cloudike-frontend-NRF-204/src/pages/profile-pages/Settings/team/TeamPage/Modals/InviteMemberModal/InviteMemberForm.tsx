import React from 'react';
import { useTranslation } from 'react-i18next';
import { Form, FormikValues, useFormikContext } from 'formik';
import { MenuItem } from '@material-ui/core';

import { Chips, Input, Select } from '@components';
import { FormProps } from './InviteMemberModal.types';

import { Styled } from '../Modal.styled';
import { InviteMemberStyled } from './InviteMemberModal.styled';

export const InviteMemberForm: React.FC<FormProps> = ({ emails, setEmails }) => {
  const { t } = useTranslation('teamPage');
  const { handleSubmit }: FormikValues = useFormikContext();

  const handleDelete = (email: string) => {
    setEmails((prev) => prev.filter((e) => e !== email));
  };

  function onKeyDown(keyEvent: any) {
    if ((keyEvent.charCode || keyEvent.keyCode) === 13) {
      handleSubmit();
    }
  }

  return (
    <Form onKeyDown={onKeyDown}>
      <Styled.ModalFromContainer>
        <Input name="email" label={t('inviteMember.emailInput.label')} />
        <Chips chips={emails} handleDelete={handleDelete} />
        <InviteMemberStyled.Label>{t('inviteMember.select.label')}</InviteMemberStyled.Label>
        <Select name="invitationLang">
          <MenuItem value="en">{t('inviteMember.select.lang1')}</MenuItem>
          <MenuItem value="ko">{t('inviteMember.select.lang2')}</MenuItem>
        </Select>
      </Styled.ModalFromContainer>
    </Form>
  );
};
