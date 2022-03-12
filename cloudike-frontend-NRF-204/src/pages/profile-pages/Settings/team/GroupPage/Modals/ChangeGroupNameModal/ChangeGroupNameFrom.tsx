import React from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { Form, useFormikContext } from 'formik';
import { Button } from '@material-ui/core';

import { Input } from '@components';
import { paths as settingsPaths } from '@utils/routes/settings-routes';

import { Styled } from '../Modal.styled';

export const ChangeGroupNameFrom: React.FC = () => {
  const { t } = useTranslation('groupPage');
  const { push } = useHistory();
  const { isValid } = useFormikContext();

  const handleBack = () => {
    push(`/${settingsPaths.teamGroup}`);
  };

  return (
    <Form>
      <Styled.ModalFromContainer>
        <Input name="groupName" label="" placeholder="Name" />
        <Styled.ButtonContainer>
          <Button color="secondary" variant="outlined" onClick={handleBack}>
            {t('changeGroupName.buttons.cancel')}
          </Button>
          <Button color="primary" variant="contained" disabled={!isValid} type="submit">
            {t('changeGroupName.buttons.submit')}
          </Button>
        </Styled.ButtonContainer>
      </Styled.ModalFromContainer>
    </Form>
  );
};
