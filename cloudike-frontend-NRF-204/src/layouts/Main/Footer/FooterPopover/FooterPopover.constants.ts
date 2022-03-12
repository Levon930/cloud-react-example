import { useTranslation } from 'react-i18next';

import { paths } from '@utils/routes/profile-routes';
import { FooterPopoverLink } from './FooterPopover.types';

export const useConstants = (): FooterPopoverLink[] => {
  const { t } = useTranslation('mainLayout');

  return [
    { title: t('footer.popover.more.downloadClient'), path: paths.home, id: 1 },
    { title: t('footer.popover.more.website'), path: paths.home, id: 2 },
    { title: t('footer.popover.more.blog'), path: paths.home, id: 3 },
    { title: t('footer.popover.more.contact'), path: paths.home, id: 4 },
    { title: t('footer.popover.more.support'), path: paths.home, id: 5 },
  ];
};
