import React from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { Form, FormikValues, useFormikContext } from 'formik';
import { Button } from '@material-ui/core';
import { InfoOutlined } from '@material-ui/icons';

import { FormCheckbox, Input } from '@components';
import { paths as settingsPaths } from '@utils/routes/settings-routes';
import { PairRadioGroup } from './components';

import { Styled } from '../Modal.styled';
import { AuthorityStyled } from './ChangeAuthorityModal.styled';

export const ChangeAuthorityForm: React.FC = () => {
  const { t } = useTranslation('groupPage');
  const { push } = useHistory();
  const { isValid, values }: FormikValues = useFormikContext();

  const handleBack = () => {
    push(`/${settingsPaths.teamGroup}`);
  };

  return (
    <Form>
      <Styled.ModalFromContainer>
        <PairRadioGroup
          pairRadios={[
            {
              name: 'can_print',
              label: t('changeAuthority.pairedRadios.radios.label1'),
              firstId: 'true',
              secondId: 'false',
            },
            {
              name: 'can_download',
              label: t('changeAuthority.pairedRadios.radios.label2'),
              firstId: 'true',
              secondId: 'false',
            },
            {
              name: 'pc_can_download',
              label: t('changeAuthority.pairedRadios.radios.label3'),
              firstId: 'true',
              secondId: 'false',
            },
            {
              name: 'user_mobile_restriction',
              label: t('changeAuthority.pairedRadios.radios.label4'),
              firstId: 'true',
              secondId: 'false',
            },
            {
              name: 'use_watermarks',
              label: t('changeAuthority.pairedRadios.radios.label5'),
              firstId: 'true',
              secondId: 'false',
            },
          ]}
          firstLabel={t('changeAuthority.pairedRadios.label1')}
          secondLabel={t('changeAuthority.pairedRadios.label2')}
        />
        <AuthorityStyled.ModalItem>
          <AuthorityStyled.ModalItemLabel>
            {t('changeAuthority.ipRestriction.label')}
            <AuthorityStyled.Tooltip title={t('changeAuthority.infoPopover')}>
              <InfoOutlined />
            </AuthorityStyled.Tooltip>
          </AuthorityStyled.ModalItemLabel>
          <FormCheckbox label="" name="ip_restriction" />
          <Input name="allowed_ips" disabled={!values.ip_restriction} label="" placeholder="" />
        </AuthorityStyled.ModalItem>
      </Styled.ModalFromContainer>
      <Styled.ButtonContainer>
        <Button color="secondary" variant="outlined" onClick={handleBack}>
          {t('changeAuthority.buttons.cancel')}
        </Button>
        <Button color="primary" variant="contained" type="submit" disabled={!isValid}>
          {t('changeAuthority.buttons.apply')}
        </Button>
      </Styled.ButtonContainer>
    </Form>
  );
};
