import { useTranslation } from 'react-i18next';

import { paths } from '@utils/routes/profile-routes';
import { InfoPopoverLink } from './FooterInfoPopover.types';

export const useConstants = (): InfoPopoverLink[] => {
  const { t } = useTranslation('mainLayout');

  return [
    { title: t('footer.popover.info.downloadAccount'), path: paths.home, id: 1 },
    { title: t('footer.popover.info.viewUser'), path: paths.home, id: 2 },
  ];
};
