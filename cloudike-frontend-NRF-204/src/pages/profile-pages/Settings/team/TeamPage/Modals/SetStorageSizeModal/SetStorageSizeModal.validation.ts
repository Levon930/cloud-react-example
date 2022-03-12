import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

export const useValidationSchema = () => {
  const { t } = useTranslation('teamPage');

  return Yup.object().shape({
    quota_size: Yup.number()
      .positive(t('setStorageSizeModal.sizeInput.validation.wrongFormat'))
      .required(t('setStorageSizeModal.sizeInput.validation.required')),
  });
};
