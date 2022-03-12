import React from 'react';
import { useTranslation } from 'react-i18next';

import { useReactiveVar } from '@apollo/client';
import { SettingsPageWrapper } from '@components/SettingsPageWrapper';
import { SettingsTabs } from '@components/SettingsTabs';
import { teamSettingsPageVar } from '@store';
import { paths as settingsPaths } from '@utils/routes/settings-routes';
import { GroupPage } from './GroupPage';
import { TeamPage } from './TeamPage';
import { SettingsTab } from './TeamSettings.types';

const TeamSettings: React.FC = () => {
  const value = useReactiveVar(teamSettingsPageVar);
  const { t } = useTranslation('teamPage');

  const tabs: SettingsTab[] = [
    { label: t('tab1'), path: settingsPaths.teamMember },
    { label: t('tab2'), path: settingsPaths.teamGroup },
  ];

  return (
    <>
      <SettingsPageWrapper title={t('title')} />
      <SettingsTabs tabs={tabs} value={value} setValue={teamSettingsPageVar} />
      {value === 0 ? <TeamPage /> : <GroupPage />}
    </>
  );
};

export default TeamSettings;
