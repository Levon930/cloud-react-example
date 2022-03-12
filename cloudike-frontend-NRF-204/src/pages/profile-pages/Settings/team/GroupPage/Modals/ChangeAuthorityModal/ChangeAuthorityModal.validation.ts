import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

export const useValidationSchema = () => {
  const { t } = useTranslation('companySettings');
  const { t: t2 } = useTranslation('teamPage');

  return Yup.object().shape({
    ip_restriction: Yup.boolean().required(t('form.settings.name.validation.required')),
    allowed_ips: Yup.string().when('ip_restriction', {
      is: (ip_restriction: boolean) => ip_restriction === true,
      then: Yup.string().required(t2('changeAuthorityModal.ipRestriction.validation.required')),
      otherwise: Yup.string(),
    }),
  });
};
