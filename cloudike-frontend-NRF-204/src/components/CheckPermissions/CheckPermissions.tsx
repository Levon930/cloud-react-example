import React from 'react';

import { useCheckPermissions } from '@hooks';
import { CheckPermissionsProps } from './CheckPermissions.types';

// TODO NRF-205 - https://yt.cloudike.io/issue/NRF-205
const CheckPermissions: React.FC<CheckPermissionsProps> = ({ children, scope }) => {
  const { showContent } = useCheckPermissions(scope);

  return <>{showContent ? children : null}</>;
};
export default CheckPermissions;
