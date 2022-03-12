import React from 'react';

import { GeneralSettings } from './GeneralSettings';
import { SetPassword } from './SetPassword';

const SettingsProfileBasic: React.FC = () => {
  return (
    <>
      <GeneralSettings />
      <SetPassword />
    </>
  );
};

export default SettingsProfileBasic;
