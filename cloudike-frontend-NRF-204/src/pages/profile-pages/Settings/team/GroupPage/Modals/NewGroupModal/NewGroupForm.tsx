import React from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { Form, useFormikContext } from 'formik';
import { Button } from '@material-ui/core';

import { Input } from '@components';
import { paths as settingsPaths } from '@utils/routes/settings-routes';

import { Styled } from '../Modal.styled';

export const NewGroupForm: React.FC = () => {
  const { t } = useTranslation('groupPage');
  const { push } = useHistory();
  const { isValid } = useFormikContext();

  const handleBack = () => {
    push(`/${settingsPaths.teamGroup}`);
  };

  return (
    <Form>
      <Styled.ModalFromContainer>
        <Input name="name" label="" placeholder={t('newGroupModal.groupNameInput.placeholder')} />
        <Styled.ButtonContainer>
          <Button color="secondary" variant="outlined" onClick={handleBack}>
            {t('newGroupModal.buttons.cancel')}
          </Button>
          <Button color="primary" variant="contained" disabled={!isValid} type="submit">
            {t('newGroupModal.buttons.submit')}
          </Button>
        </Styled.ButtonContainer>
      </Styled.ModalFromContainer>
    </Form>
  );
};
