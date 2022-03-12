import { useTranslation } from 'react-i18next';
import { PASSWORD_REGEXP } from 'constants/validationPatterns';
import * as Yup from 'yup';

export const useValidationSchema = () => {
  const { t } = useTranslation('accountSettings');

  return Yup.object().shape({
    currentPassword: Yup.string()
      .required(t('form.setPassword.currentPassword.validation.required'))
      .matches(PASSWORD_REGEXP, t('form.setPassword.currentPassword.validation.wrong_format')),
    newPassword: Yup.string()
      .required(t('form.setPassword.newPassword.validation.required'))
      .matches(PASSWORD_REGEXP, t('form.setPassword.newPassword.validation.wrong_format')),
    checkNewPassword: Yup.string()
      .required(t('form.setPassword.checkNewPassword.validation.required'))
      .oneOf(
        [Yup.ref('newPassword')],
        t('form.setPassword.checkNewPassword.validation.wrong_format'),
      ),
  });
};
