import { useTranslation } from 'react-i18next';

const usePublicLinkExpirationTranslation = () => {
  const { t } = useTranslation('publicLink');

  const expirationAlt = t('publicLink.expirationAlt');
  const expirationTitle = t('publicLink.expirationTitle');
  const expirationText = t('publicLink.expirationText');

  return { expirationAlt, expirationTitle, expirationText };
};

export default usePublicLinkExpirationTranslation;
