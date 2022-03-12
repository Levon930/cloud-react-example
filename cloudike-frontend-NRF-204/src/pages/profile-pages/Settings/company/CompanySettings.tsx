import React, { useState } from 'react';

import { SettingsPageWrapper } from '@components/SettingsPageWrapper';
import { SettingsTabs } from '@components/SettingsTabs';
import { paths } from '@utils/routes/settings-routes';
import { SettingsTab } from './CompanySettings.types';
import CompanySettingsKinds from './CompanySettingsKinds';

const CompanySettings: React.FC = () => {
  const [value, setValue] = useState<number>(0);

  const tabs: SettingsTab[] = [
    { label: 'Basic Settings', path: paths.companySettingsBasic },
    { label: 'Security Settings', path: paths.companySettingsSecurity },
    { label: 'Custom Settings', path: paths.companySettingsCustom },
  ];

  return (
    <>
      <SettingsPageWrapper title="Company settings" />
      <SettingsTabs tabs={tabs} value={value} setValue={setValue} />
      <CompanySettingsKinds value={value} />
    </>
  );
};

export default CompanySettings;
