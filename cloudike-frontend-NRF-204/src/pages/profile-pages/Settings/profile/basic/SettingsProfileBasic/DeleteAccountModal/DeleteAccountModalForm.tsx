import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { Form, FormikValues, useFormikContext } from 'formik';
import { Button, FormLabel } from '@material-ui/core';

import { RadioGroup } from '@components';
import { paths } from '@utils/routes/settings-routes';
import { FormProps } from './DeleteAccountModal.types';
import DeleteAccountModalInput from './DeleteAccountModalnput';

import { Styled } from './DeleteAccountModal.styled';

const DeleteAccountModalForm: React.FC<FormProps> = ({ setIsOpen }) => {
  const [page, setPage] = useState(1);
  const { t } = useTranslation('deleteAccountModal');
  const { push } = useHistory();
  const { isValid, values }: FormikValues = useFormikContext();

  const radioItems = [
    { name: t('form.checkboxGroup.option1'), id: '1' },
    { name: t('form.checkboxGroup.option2'), id: '2' },
    { name: t('form.checkboxGroup.option3'), id: '3' },
    { name: t('form.checkboxGroup.option4'), id: '4' },
    { name: t('form.checkboxGroup.option5'), id: '5' },
    { name: t('form.checkboxGroup.option6'), id: '6' },
  ];

  const handleFirstBack = () => {
    push(paths.profileSettingsBasic);
    setIsOpen(false);
  };

  const handleChangePage = (page: number) => {
    setPage(page);
  };

  return (
    <Form>
      {page === 1 ? (
        <>
          <RadioGroup label={t('form.firstText')} name="deleteReason" items={radioItems} />
          <DeleteAccountModalInput values={values} />
          <Styled.ButtonsWrapper>
            <Button color="secondary" variant="outlined" type="button" onClick={handleFirstBack}>
              {t('form.cancel')}
            </Button>
            <Button
              color="primary"
              variant="contained"
              disabled={!isValid}
              type="button"
              onClick={() => handleChangePage(2)}
            >
              {t('form.next')}
            </Button>
          </Styled.ButtonsWrapper>
        </>
      ) : (
        <>
          <FormLabel>{t('form.secondText')}</FormLabel>
          <Styled.ButtonsWrapper>
            <Button
              color="secondary"
              variant="outlined"
              type="button"
              onClick={() => handleChangePage(1)}
            >
              {t('form.cancel')}
            </Button>
            <Button color="primary" variant="contained" type="submit">
              {t('form.delete')}
            </Button>
          </Styled.ButtonsWrapper>
        </>
      )}
    </Form>
  );
};

export default DeleteAccountModalForm;
