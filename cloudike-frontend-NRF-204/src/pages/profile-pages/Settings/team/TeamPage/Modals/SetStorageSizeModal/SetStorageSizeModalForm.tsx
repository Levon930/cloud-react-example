import React from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { Form, useFormikContext } from 'formik';
import { Button } from '@material-ui/core';

import { Input } from '@components';
import { paths as settingsPaths } from '@utils/routes/settings-routes';
import { FormProps } from './SetStorageSizeModal.types';

import { Styled } from '../Modal.styled';

export const SetStorageSizeModalForm: React.FC<FormProps> = ({ setIsOpen }) => {
  const { t } = useTranslation('teamPage');
  const { push } = useHistory();
  const { isValid } = useFormikContext();

  const handleBack = () => {
    push(`/${settingsPaths.teamMember}`);
    setIsOpen(false);
  };

  return (
    <Form>
      <Styled.ModalFromContainer>
        <Input
          name="quota_size"
          label=""
          type="number"
          placeholder={t('setStorageSizeModal.sizeInput.placeholder')}
        />
        <Styled.ButtonContainer>
          <Button color="secondary" variant="outlined" onClick={handleBack}>
            {t('setStorageSizeModal.buttons.cancel')}
          </Button>
          <Button color="primary" variant="contained" type="submit" disabled={!isValid}>
            {t('setStorageSizeModal.buttons.submit')}
          </Button>
        </Styled.ButtonContainer>
      </Styled.ModalFromContainer>
    </Form>
  );
};
