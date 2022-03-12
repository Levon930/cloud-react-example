import { useTranslation } from 'react-i18next';

const usePublicLinkUploadTranslation = () => {
  const { t } = useTranslation('publicLink');

  const upload = t('publicLink.upload');
  const uploadComplete = t('publicLink.uploadComplete');

  return { upload, uploadComplete };
};

export default usePublicLinkUploadTranslation;
