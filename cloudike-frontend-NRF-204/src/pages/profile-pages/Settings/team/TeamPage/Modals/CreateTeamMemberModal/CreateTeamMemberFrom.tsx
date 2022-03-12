import React from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { format } from 'date-fns';
import { Form, FormikValues, useFormikContext } from 'formik';
import { Button, MenuItem } from '@material-ui/core';
import { InfoOutlined } from '@material-ui/icons';

import { FormCheckbox, Input, Select } from '@components';
import { paths as settingsPaths } from '@utils/routes/settings-routes';

import { Styled } from '../Modal.styled';
import { CreateTeamStyled } from './CreateTeamMemberModal.styled';

export const CreateTeamMemberFrom: React.FC = () => {
  const { t } = useTranslation('teamPage');
  const { push } = useHistory();
  const { isValid, values }: FormikValues = useFormikContext();

  const handleBack = () => {
    push(`/${settingsPaths.teamMember}`);
  };

  return (
    <Form>
      <Styled.ModalFromContainer>
        <Input
          name="name"
          label={t('createTeamMemberModal.nameInput.label')}
          placeholder={t('createTeamMemberModal.nameInput.placeholder')}
        />
        <Input
          name="email"
          label={t('createTeamMemberModal.emailInput.label')}
          placeholder={t('createTeamMemberModal.emailInput.placeholder')}
        />
        <Select name="lang">
          <MenuItem value="en">{t('createTeamMemberModal.select.lang1')}</MenuItem>
          <MenuItem value="ko">{t('createTeamMemberModal.select.lang2')}</MenuItem>
        </Select>
        <Input
          name="password"
          type="password"
          label={t('createTeamMemberModal.passwordInput.label')}
          placeholder={t('createTeamMemberModal.passwordInput.placeholder')}
        />
        <FormCheckbox name="expirationDate" label={t('createTeamMemberModal.expirationDate')} />
        {values.expirationDate && (
          <Input
            name="expirationDateInput"
            type="date"
            minDate={format(new Date(), 'yyyy-MM-dd')}
          />
        )}
        <FormCheckbox name="setAuthority" label={t('createTeamMemberModal.setAuthority')} />
        {values.setAuthority && (
          <CreateTeamStyled.CheckboxContainer>
            <FormCheckbox name="can_download" label={t('createTeamMemberModal.allowDownload')} />
            <FormCheckbox name="pc_can_download" label={t('createTeamMemberModal.pcClientUsage')} />
            <FormCheckbox
              name="user_mobile_restriction"
              label={t('createTeamMemberModal.blockMobile')}
            />
            <FormCheckbox name="can_print" label={t('createTeamMemberModal.allowPrint')} />
            <FormCheckbox name="use_watermarks" label={t('createTeamMemberModal.useWathermark')} />
            <CreateTeamStyled.Container>
              <FormCheckbox
                name="ip_restriction"
                label={t('createTeamMemberModal.ipRestriction')}
              />
              {values.ip_restriction && <Styled.IPInput name="ipRestrictionInput" type="text" />}
              <CreateTeamStyled.Tooltip title={t('createTeamMemberModal.infoPopover')}>
                <InfoOutlined />
              </CreateTeamStyled.Tooltip>
            </CreateTeamStyled.Container>
          </CreateTeamStyled.CheckboxContainer>
        )}
        <Styled.ButtonContainer>
          <Button color="secondary" variant="outlined" onClick={handleBack}>
            {t('createTeamMemberModal.buttons.cancel')}
          </Button>
          <Button color="primary" variant="contained" type="submit" disabled={!isValid}>
            {t('createTeamMemberModal.buttons.apply')}
          </Button>
        </Styled.ButtonContainer>
      </Styled.ModalFromContainer>
    </Form>
  );
};
