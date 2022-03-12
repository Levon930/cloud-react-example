import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

export const useValidationSchema = () => {
  const { t } = useTranslation('teamPage');

  return Yup.object().shape({
    deleteExpirationDate: Yup.boolean(),
    expirationDateInput: Yup.string().when('deleteExpirationDate', {
      is: (deleteExpirationDate: boolean) => deleteExpirationDate === false,
      then: Yup.string().required(t('setExpiratrion.expirationDateInput.validation.required')),
      otherwise: Yup.string(),
    }),
  });
};
