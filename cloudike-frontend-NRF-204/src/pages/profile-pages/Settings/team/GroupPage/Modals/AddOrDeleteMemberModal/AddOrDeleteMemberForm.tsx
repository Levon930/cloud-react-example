import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@material-ui/core';

import { MembersTable } from '@components';
import { FormProps } from './AddOrDeleteMemberModal.types';

import { Styled } from '../Modal.styled';

export const AddOrDeleteMemberForm: React.FC<FormProps> = ({
  tab,
  setSelected,
  selected,
  groupId,
}) => {
  const { t } = useTranslation('groupPage');

  return (
    <>
      <Styled.ModalFromContainer>
        <MembersTable tab={tab} setSelected={setSelected} selected={selected} groupId={groupId} />
      </Styled.ModalFromContainer>
      <Styled.ButtonContainer>
        <Button color="primary" variant="contained" type="submit">
          {!tab ? t('addOrDelete.buttonInvite') : t('addOrDelete.buttonDelete')}
        </Button>
      </Styled.ButtonContainer>
    </>
  );
};
