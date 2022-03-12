import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

export const useValidationSchema = () => {
  const { t } = useTranslation('accountSettings');

  return Yup.object().shape({
    name: Yup.string().required(t('form.general.name.validation.required')),
    email: Yup.string()
      .email(t('form.general.email.validation.wrong_format'))
      .required(t('form.general.email.validation.required')),
  });
};
