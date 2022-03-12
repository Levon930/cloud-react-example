import { useTranslation } from 'react-i18next';

const useRightSidebarTranslation = () => {
  const { t } = useTranslation('publicLink');

  const downloadText = t('publicLink.download');
  const uploadText = t('publicLink.upload');

  return { downloadText, uploadText };
};

export default useRightSidebarTranslation;
