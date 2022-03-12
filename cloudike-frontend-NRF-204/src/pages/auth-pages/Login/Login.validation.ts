import { useTranslation } from 'react-i18next';
import { PASSWORD_REGEXP } from 'constants/validationPatterns';
import * as Yup from 'yup';

export const useValidationSchema = () => {
  const { t } = useTranslation('auth');

  return Yup.object().shape({
    login: Yup.string().required(t('form.login.validation.required')),
    password: Yup.string()
      .required(t('form.password.validation.required'))
      .matches(PASSWORD_REGEXP, t('form.password.validation.wrong_format')),
    permanent_auth: Yup.boolean().required(),
  });
};
