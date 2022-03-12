import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

import {
  FILE_SIZE,
  SUPPORTED_FORMATS,
} from '@components/form-components/Dropzone/Dropzone.constants';

export const useValidationSchema = () => {
  const { t } = useTranslation('companySettings');

  return Yup.object().shape({
    dropzone: Yup.mixed()
      .required(t('customSettings.validation.required'))
      .test(
        'fileSize',
        t('customSettings.validation.file_size'),
        (value) => value && value.size <= FILE_SIZE,
      )
      .test(
        'fileFormat',
        t('customSettings.validation.file_format'),
        (value) => value && SUPPORTED_FORMATS.includes(value.type),
      ),
  });
};
