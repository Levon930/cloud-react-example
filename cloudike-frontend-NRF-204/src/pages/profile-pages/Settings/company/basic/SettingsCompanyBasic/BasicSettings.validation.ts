import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

export const useValidationSchema = () => {
  const { t } = useTranslation('companySettings');

  return Yup.object().shape({
    companyName: Yup.string().required(t('form.settings.name.validation.required')),
    companyDomain: Yup.string().required(t('form.settings.domain.validation.required')),
  });
};
