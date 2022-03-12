import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

export const useValidationSchema = () => {
  const { t } = useTranslation('paymentMethodModal');

  return Yup.object().shape({
    plan: Yup.string().required(t('validationErrors.mustChooseOne')),
    billing: Yup.string().required(t('validationErrors.mustChooseOne')),
    card: Yup.string().required(t('validationErrors.mustChooseOne')),
    selectCardType: Yup.string().required(t('validationErrors.mustChooseOne')),
    acceptTerms: Yup.boolean()
      .required(t('validationErrors.acceptTerms'))
      .isTrue(t('validationErrors.acceptTerms')),
  });
};
