import { useTranslation } from 'react-i18next';

import { getUpperCase } from './PublicLeftSidebar.utils';

const usePublicLinkLeftSidebarTranslation = () => {
  const { t } = useTranslation('publicLink');

  const Download = getUpperCase(t('publicLink.download'));
  const Upload = getUpperCase(t('publicLink.upload'));

  return { Download, Upload };
};

export default usePublicLinkLeftSidebarTranslation;
