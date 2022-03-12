import React from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { Form, useFormikContext } from 'formik';
import { Button } from '@material-ui/core';

import { useReactiveVar } from '@apollo/client';
import { Input } from '@components';
import { documentCurrentPathVar } from '@store';

import { Styled } from '../Modal.styled';

export const RenameModalForm: React.FC = () => {
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
        <Input name="name" label="" placeholder={t('renameFolder.input.placeholder')} />
        <Styled.ButtonContainer>
          <Button color="secondary" variant="outlined" onClick={handleBack}>
            {t('renameFolder.buttons.cancel')}
          </Button>
          <Button color="primary" variant="contained" disabled={!isValid} type="submit">
            {t('renameFolder.buttons.submit')}
          </Button>
        </Styled.ButtonContainer>
      </Styled.ModalFromContainer>
    </Form>
  );
};
