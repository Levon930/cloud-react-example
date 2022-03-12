import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

import { IP_REGEXP, PASSWORD_REGEXP } from '@constants/validationPatterns';

export const useValidationSchema = () => {
  const { t } = useTranslation('teamPage');
  const { t: t2 } = useTranslation('registration');

  return Yup.object().shape({
    name: Yup.string().required(t('createTeamMemberModal.nameInput.validation.required')),
    email: Yup.string().email().required(t2('form.email.validation.required')),
    password: Yup.string()
      .required(t('createTeamMemberModal.passwordInput.validation.required'))
      .matches(PASSWORD_REGEXP, t('createTeamMemberModal.passwordInput.validation.wrongFormat')),
    expirationDate: Yup.boolean().required(
      t('createTeamMemberModal.nameInput.validation.required'),
    ),
    expirationDateInput: Yup.string().when('expirationDate', {
      is: (expirationDate: boolean) => expirationDate === true,
      then: Yup.string().required(
        t('createTeamMemberModal.expirationDateInput.validation.required'),
      ),
      otherwise: Yup.string(),
    }),
    ipRestrictionInput: Yup.string().matches(
      IP_REGEXP,
      t('createTeamMemberModal.ipRestrictionInput.validation.wrongFormat'),
    ),
  });
};
