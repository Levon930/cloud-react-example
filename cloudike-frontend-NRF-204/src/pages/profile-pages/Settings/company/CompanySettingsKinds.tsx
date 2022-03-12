import React from 'react';

import { BasicCompanySettings } from './basic';
import { CompanySettingsKindsProps, SettingsValue } from './CompanySettings.types';
import { CustomCompanySettings } from './custom';
import { SecurityCompanySettings } from './security';

const CompanySettingsKinds: React.FC<CompanySettingsKindsProps> = ({ value }) => {
  if (value === SettingsValue.basicSetting) {
    return <BasicCompanySettings />;
  }
  if (value === SettingsValue.securitySetting) {
    return <SecurityCompanySettings />;
  }
  if (value === SettingsValue.customSetting) {
    return <CustomCompanySettings />;
  }

  return null;
};

export default CompanySettingsKinds;
