import { paths } from '@utils/routes/profile-routes';
import { paths as settingsPaths } from '@utils/routes/settings-routes';
// FIXME resolve recursively dependencies
import { asyncLoading } from '../../app/Router/Async';

const HomePage = asyncLoading(() =>
  import('@pages/profile-pages/HomePage').then((module) => ({ default: module.HomePage })),
);
const DocumentsPage = asyncLoading(() =>
  import('@pages/profile-pages/DocumentsPage').then((module) => ({
    default: module.DocumentsPage,
  })),
);
const FolderPage = asyncLoading(() =>
  import('@pages/profile-pages/FolderPage').then((module) => ({ default: module.FolderPage })),
);
const CorporateFolderPage = asyncLoading(() =>
  import('@pages/profile-pages/CorporateFolderPage').then((module) => ({
    default: module.CorporateFolderPage,
  })),
);
const FavoritesPage = asyncLoading(() =>
  import('@pages/profile-pages/FavoritesPage').then((module) => ({
    default: module.FavoritesPage,
  })),
);
const TrashPage = asyncLoading(() =>
  import('@pages/profile-pages/TrashPage').then((module) => ({ default: module.TrashPage })),
);
const CompanySettings = asyncLoading(() =>
  import('@pages/profile-pages/Settings/company').then((module) => ({
    default: module.CompanySettings,
  })),
);
const ProfileSettings = asyncLoading(() =>
  import('@pages/profile-pages/Settings/profile').then((module) => ({
    default: module.ProfileSettings,
  })),
);
const PlanSettings = asyncLoading(() =>
  import('@pages/profile-pages/Settings/plan').then((module) => ({
    default: module.Plan,
  })),
);

const TeamSettings = asyncLoading(() =>
  import('@pages/profile-pages/Settings/team').then((module) => ({
    default: module.TeamSettings,
  })),
);

export const routes = [
  { path: paths.home, component: HomePage },
  { path: paths.documents, component: DocumentsPage },
  { path: paths.folder, component: FolderPage },
  { path: paths.corporateFolder, component: CorporateFolderPage },
  { path: paths.favorites, component: FavoritesPage },
  { path: paths.trash, component: TrashPage },

  { path: settingsPaths.companySettingsBasic, component: CompanySettings },
  { path: settingsPaths.changeMiddleAdminModal, component: CompanySettings },
  { path: settingsPaths.changeSuperAdminModal, component: CompanySettings },
  { path: settingsPaths.confirmSuperAdminModal, component: CompanySettings },
  { path: settingsPaths.companySettingsSecurity, component: CompanySettings },
  { path: settingsPaths.companySettingsCustom, component: CompanySettings },
  { path: settingsPaths.profileSettingsBasic, component: ProfileSettings },
  { path: settingsPaths.profileSettingsDetailed, component: ProfileSettings },
  { path: settingsPaths.planSettings, component: PlanSettings },
  { path: settingsPaths.planSettingsChange, component: PlanSettings },
  { path: settingsPaths.planSettingsPaymentHistory, component: PlanSettings },
  { path: settingsPaths.planSettingsPaymentMethod, component: PlanSettings },

  { path: settingsPaths.teamMember, component: TeamSettings },
  { path: settingsPaths.teamGroup, component: TeamSettings },
  { path: settingsPaths.teamGroupInviteMember, component: TeamSettings },
  { path: settingsPaths.teamGroupDeleteMember, component: TeamSettings },
];
