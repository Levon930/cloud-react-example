import { useTranslation } from 'react-i18next';

import {
  AccountIcon,
  ActivityLogIcon,
  CompanyFolderIcon,
  FavoritesIcon,
  HomeIcon,
  MyDocumentsIcon,
  PlanIcon,
  RecycleBinIcon,
  SharedDocumentsIcon,
} from '@components/SvgComponents';
import { paths } from '@utils/routes/profile-routes';
import { paths as settingsPaths } from '@utils/routes/settings-routes';
import { LeftSideBarMenus } from './LeftSideBar.types';

export const useConstants = (): LeftSideBarMenus => {
  const { t } = useTranslation('menuItems');
  const { t: t2 } = useTranslation('menuItems');

  return {
    mainMenu: [
      { title: t('main.home'), icon: <HomeIcon />, path: paths.home, id: 48 },
      { title: t('main.myDocuments'), icon: <MyDocumentsIcon />, path: paths.documents, id: 58 },
      {
        title: t('main.sharedDocuments'),
        icon: <SharedDocumentsIcon />,
        path: paths.corporateFolder,
        id: 59,
      },
      {
        title: t('main.companyFolder'),
        icon: <CompanyFolderIcon />,
        path: paths.folder,
        id: 69,
      },
      { title: t('main.favorites'), icon: <FavoritesIcon />, path: paths.favorites, id: 70 },
      { title: t('main.recycleBin'), icon: <RecycleBinIcon />, path: paths.trash, id: 71 },
    ],
    settingsMenu: [
      { title: t2('main.home'), icon: <HomeIcon />, path: paths.home, id: 72 },
      {
        title: t2('settings.companySettings'),
        icon: <CompanyFolderIcon />,
        path: settingsPaths.companySettingsBasic,
        id: 73,
      },
      {
        title: t2('settings.accountSettings'),
        icon: <AccountIcon />,
        path: settingsPaths.profileSettingsBasic,
        id: 74,
      },
      {
        title: t2('settings.plan'),
        icon: <PlanIcon />,
        path: settingsPaths.planSettings,
        id: 75,
      },
      {
        title: t2('settings.teamMemberManagement'),
        icon: <SharedDocumentsIcon />,
        path: settingsPaths.teamMember,
        id: 76,
      },
      {
        title: t2('settings.activityLog'),
        icon: <ActivityLogIcon />,
        path: settingsPaths.activityLogSettings,
        id: 77,
      },
    ],
  };
};
