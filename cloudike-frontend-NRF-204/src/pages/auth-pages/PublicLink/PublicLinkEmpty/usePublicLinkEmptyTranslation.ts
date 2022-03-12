import { useTranslation } from 'react-i18next';

const usePublicLinkEmptyTranslation = () => {
  const { t } = useTranslation('publicLink');

  const emptyFolder = t('publicLink.emptyFolder');
  const uploadLink = t('publicLink.uploadLink');
  const uploadNotification = t('publicLink.uploadNotification');

  return { emptyFolder, uploadLink, uploadNotification };
};

export default usePublicLinkEmptyTranslation;
