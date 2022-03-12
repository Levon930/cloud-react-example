import { useTranslation } from 'react-i18next';
import { PASSWORD_REGEXP } from 'constants/validationPatterns';
import * as Yup from 'yup';

export const useValidationSchema = () => {
  const { t } = useTranslation('registration');
  const { t: t2 } = useTranslation('auth');

  return Yup.object().shape({
    newPassword: Yup.string()
      .required(t('form.password.validation.required'))
      .matches(PASSWORD_REGEXP, t2('form.password.validation.wrong_format')),
    reEnterPassword: Yup.string()
      .required(t('form.password.validation.required'))
      .oneOf([Yup.ref('newPassword')], t2('form.password.validation.passwords_must_match')),
  });
};
