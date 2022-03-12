import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

import { PASSWORD_REGEXP } from '@constants';

export const useValidationSchema = () => {
  const { t } = useTranslation('auth');

  return Yup.object().shape({
    password: Yup.string()
      .required(t('form.password.validation.required'))
      .matches(PASSWORD_REGEXP, t('form.password.validation.wrong_format')),
  });
};
