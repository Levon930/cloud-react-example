import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

export const useValidationSchema = () => {
  const { t } = useTranslation('companySettings');

  return Yup.object().shape({
    editor: Yup.object().shape({
      blocks: Yup.mixed().test('has text', t('terms_modal.editor.validation.required'), (value) => {
        return value && value[0].text && value[0].text.length;
      }),
    }),
  });
};
