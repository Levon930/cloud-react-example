import { useTranslation } from 'react-i18next';

import { paths } from '@utils/routes/settings-routes';
import { ProfilePopoverLink } from './ProfilePopover.types';

export const useConstants = (): ProfilePopoverLink[] => {
  const { t } = useTranslation('mainLayout');

  return [
    { title: t('header.popover.profile.settings'), path: paths.profileSettingsBasic, id: 1 },
    {
      title: t('header.popover.profile.team'),
      path: paths.teamMember,
      id: 2,
    },
    { title: t('header.popover.profile.plan'), path: paths.planSettingsChange, id: 3 },
  ];
};
