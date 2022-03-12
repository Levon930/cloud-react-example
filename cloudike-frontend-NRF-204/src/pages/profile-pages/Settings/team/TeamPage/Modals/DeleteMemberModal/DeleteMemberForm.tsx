import React from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { Form, FormikValues, useFormikContext } from 'formik';
import { Button, MenuItem } from '@material-ui/core';

import { useCompanyRemoveUserMutation } from '@api';
import { useReactiveVar } from '@apollo/client';
import { FormCheckbox, Select } from '@components';
import { toaster } from '@helpers';
import { teamSelectedVar } from '@store';
import { paths as settingsPaths } from '@utils/routes/settings-routes';
import { DeleteMemberProps } from './DeleteMemberForm.types';

import { Styled } from '../Modal.styled';
import { DeleteMemberStyled } from './DeleteMemberModal.styled';

export const DeleteMemberForm: React.FC<DeleteMemberProps> = ({ resetForm, members, refetch }) => {
  const { t } = useTranslation('teamPage');
  const { push } = useHistory();
  const { isValid, values }: FormikValues = useFormikContext();

  const teamSelected = useReactiveVar(teamSelectedVar);

  const [removeUser] = useCompanyRemoveUserMutation();

  const handleSubmit = async () => {
    try {
      await Promise.all(
        teamSelected.map(({ userid }) => {
          return removeUser({
            variables: {
              auto_remove: true,
              need_wipe: 'False',
              transfer_file: values.transfer_file,
              transfer_login: values.transfer_login,
              user_id: userid,
            },
          });
        }),
      );
      await refetch();
      resetForm();
      teamSelectedVar([]);
      push(`/${settingsPaths.teamMember}`);
    } catch (e) {
      toaster(t('deleteMember.errorMessage'), 'error');
    }
  };

  const handleBack = () => {
    push(`/${settingsPaths.teamMember}`);
  };

  return (
    <Form>
      <Styled.ModalFromContainer>
        <DeleteMemberStyled.ModalItem>
          <FormCheckbox label={`${t('deleteMember.transferFilesLabel')}`} name="transfer_file" />
          <Select name="transfer_login" disabled={!values?.transfer_file}>
            {members.map((member) => (
              <MenuItem value={(member.logins && member.logins[0]) || ''}>{member.name}</MenuItem>
            ))}
          </Select>
        </DeleteMemberStyled.ModalItem>
        <DeleteMemberStyled.ButtonContainer>
          <Button color="primary" variant="contained" type="submit" disabled={!isValid}>
            {t('deleteMember.buttons.delete')}
          </Button>
          <Styled.ButtonContainer>
            <Button color="secondary" variant="outlined" onClick={handleBack}>
              {t('deleteMember.buttons.cancel')}
            </Button>
            <Button
              color="primary"
              variant="contained"
              type="button"
              disabled={!isValid}
              onClick={handleSubmit}
            >
              {t('deleteMember.buttons.submit')}
            </Button>
          </Styled.ButtonContainer>
        </DeleteMemberStyled.ButtonContainer>
      </Styled.ModalFromContainer>
    </Form>
  );
};
