import React from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { format } from 'date-fns';
import { Form, FormikValues, useFormikContext } from 'formik';
import { Button } from '@material-ui/core';
import { InfoOutlined } from '@material-ui/icons';

import { FormCheckbox, Input } from '@components';
import { paths as settingsPaths } from '@utils/routes/settings-routes';
import { FormProps } from './SetExpiratrionDateModal.types';

import { Styled } from '../Modal.styled';
import { SetExpiratrionDateStyled } from './SetExpiratrionDateModal.styled';

export const SetExpiratrionDateForm: React.FC<FormProps> = ({ setIsOpen }) => {
  const { t } = useTranslation('teamPage');
  const { push } = useHistory();
  const { isValid, values }: FormikValues = useFormikContext();

  const handleBack = () => {
    push(`/${settingsPaths.teamMember}`);
    setIsOpen(false);
  };

  return (
    <Form>
      <Styled.ModalFromContainer>
        <SetExpiratrionDateStyled.LabelContainer>
          <SetExpiratrionDateStyled.Label>
            {t('setExpiratrion.expirationDateInput.label')}
          </SetExpiratrionDateStyled.Label>
          <SetExpiratrionDateStyled.Tooltip title={t('setExpiratrion.infoPopover')}>
            <InfoOutlined />
          </SetExpiratrionDateStyled.Tooltip>
        </SetExpiratrionDateStyled.LabelContainer>
        <Input
          name="expirationDateInput"
          type="date"
          disabled={values.deleteExpirationDate}
          minDate={format(new Date(), 'yyyy-MM-dd')}
        />
        <FormCheckbox
          name="deleteExpirationDate"
          label={t('setExpiratrion.deleteExpirationDate')}
        />
        <Styled.ButtonContainer>
          <Button color="secondary" variant="outlined" onClick={handleBack}>
            {t('setExpiratrion.buttons.cancel')}
          </Button>
          <Button color="primary" variant="contained" type="submit" disabled={!isValid}>
            {t('setExpiratrion.buttons.submit')}
          </Button>
        </Styled.ButtonContainer>
      </Styled.ModalFromContainer>
    </Form>
  );
};
