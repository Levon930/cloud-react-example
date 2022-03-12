import React from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { Form, useFormikContext } from 'formik';
import { Button } from '@material-ui/core';

import { useReactiveVar } from '@apollo/client';
import { Input } from '@components';
import { documentCurrentPathVar } from '@store';

import { Styled } from '../Modal.styled';

export const SetStorageSizeModalForm: React.FC = () => {
  const { t } = useTranslation('documents');
  const { push } = useHistory();
  const { isValid } = useFormikContext();

  const currentPath = useReactiveVar(documentCurrentPathVar);

  const handleBack = () => {
    push({ search: `?folder=${currentPath}` });
  };

  return (
    <Form>
      <Styled.ModalFromContainer>
        <Styled.CreateFolderModalInput>
          <Input name="path" label="" placeholder={t('createFolder.input.placeholder')} />
        </Styled.CreateFolderModalInput>
        <Styled.ButtonContainer>
          <Button color="secondary" variant="outlined" onClick={handleBack}>
            {t('createFolder.buttons.cancel')}
          </Button>
          <Button color="primary" variant="contained" type="submit" disabled={!isValid}>
            {t('createFolder.buttons.submit')}
          </Button>
        </Styled.ButtonContainer>
      </Styled.ModalFromContainer>
    </Form>
  );
};
