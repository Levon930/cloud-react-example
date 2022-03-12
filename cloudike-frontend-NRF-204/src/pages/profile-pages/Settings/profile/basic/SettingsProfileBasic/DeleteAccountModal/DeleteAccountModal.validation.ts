import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

export const useValidationSchema = () => {
  const { t } = useTranslation('deleteAccountModal');

  return Yup.object().shape({
    otherServise: Yup.string().when('deleteReason', {
      is: (deleteReason: string) => deleteReason === '4',
      then: Yup.string().required(t('form.otherServise.validation.required')),
      otherwise: Yup.string(),
    }),
    uncomfortable: Yup.string().when('deleteReason', {
      is: (deleteReason: string) => deleteReason === '5',
      then: Yup.string().required(t('form.uncomfortable.validation.required')),
      otherwise: Yup.string(),
    }),
    others: Yup.string().when('deleteReason', {
      is: (deleteReason: string) => deleteReason === '6',
      then: Yup.string().required(t('form.others.validation.required')),
      otherwise: Yup.string(),
    }),
  });
};
