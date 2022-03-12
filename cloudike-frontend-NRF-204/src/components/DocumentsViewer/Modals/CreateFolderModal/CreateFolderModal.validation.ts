import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

export const useValidationSchema = () => {
  const { t } = useTranslation('documents');

  return Yup.object().shape({
    path: Yup.string().required(t('createFolder.input.validation.required')),
  });
};
