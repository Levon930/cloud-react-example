import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

export const useValidationSchema = () => {
  const { t } = useTranslation('groupPage');

  return Yup.object().shape({
    groupName: Yup.string().required(t('changeGroupName.groupNameInput.validation.required')),
  });
};
