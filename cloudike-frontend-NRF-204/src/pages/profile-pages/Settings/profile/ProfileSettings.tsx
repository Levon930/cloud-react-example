import React, { useState } from 'react';

import { SettingsPageWrapper } from '@components/SettingsPageWrapper';
import { SettingsTabs } from '@components/SettingsTabs';
import { paths } from '@utils/routes/settings-routes';
import { SettingsProfileBasic } from './basic/SettingsProfileBasic';
import { SettingsProfileDetailed } from './detailted/SettingsProfileDetailed';
import { SettingsTab } from './ProfileSettings.types';

const ProfileSettings: React.FC = () => {
  const [value, setValue] = useState<number>(0);

  const tabs: SettingsTab[] = [
    { label: 'Basic Settings', path: paths.profileSettingsBasic },
    { label: 'Detailed Settings', path: paths.profileSettingsDetailed },
  ];

  return (
    <>
      <SettingsPageWrapper title="Profile settings" />
      <SettingsTabs tabs={tabs} value={value} setValue={setValue} />
      {value === 0 && <SettingsProfileBasic />}
      {value === 1 && <SettingsProfileDetailed />}
    </>
  );
};

export default ProfileSettings;
