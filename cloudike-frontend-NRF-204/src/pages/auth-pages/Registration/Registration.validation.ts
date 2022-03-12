import { useTranslation } from 'react-i18next';
import { PASSWORD_REGEXP } from 'constants/validationPatterns';
import * as Yup from 'yup';

export const useValidationSchema = () => {
  const { t } = useTranslation('registration');
  const { t: t2 } = useTranslation('auth');

  return Yup.object().shape({
    lang: Yup.string().required(t('form.lang.validation.required')),
    company_name: Yup.string().required(t('form.company_name.validation.required')),
    company_domain: Yup.string().required(t('form.company_domain.validation.required')),
    email: Yup.string().email().required(t('form.email.validation.required')),
    password: Yup.string()
      .required(t('form.password.validation.required'))
      .matches(PASSWORD_REGEXP, t2('form.password.validation.wrong_format')),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref('password')],
      t2('form.password.validation.passwords_must_match'),
    ),
    name: Yup.string().required(t('form.name.validation.required')),
  });
};
