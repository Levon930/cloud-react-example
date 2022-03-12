import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

export const useValidationSchema = () => {
  const { t } = useTranslation('groupPage');

  return Yup.object().shape({
    name: Yup.string().required(t('newGroupModal.groupNameInput.validation.required')),
  });
};
