import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';
// FIXME this validation schema doesn't use nowhere

export const useValidationSchema = () => {
  const { t } = useTranslation('companySettings');
  const { t: t2 } = useTranslation('teamPage');

  return Yup.object().shape({
    ipRestriction: Yup.boolean().required(t('form.settings.name.validation.required')),
    ipRestrictionInput: Yup.string().when('ipRestriction', {
      is: (ipRestriction: boolean) => ipRestriction === true,
      then: Yup.string().required(t2('changeAuthorityModal.ipRestriction.validation.required')),
      otherwise: Yup.string(),
    }),
  });
};
