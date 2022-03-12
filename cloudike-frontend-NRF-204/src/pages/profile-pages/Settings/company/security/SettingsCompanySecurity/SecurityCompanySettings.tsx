import React from 'react';

import { CompanySecuritySettings } from './SecuritySettings';
import { SignIn } from './SignIn';

const SecuritySettings: React.FC = () => {
  return (
    <>
      <CompanySecuritySettings />
      <SignIn />
    </>
  );
};

export default SecuritySettings;
