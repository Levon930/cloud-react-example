import { useEffect, useState } from 'react';

import { useGetUserAccessRightsQuery } from '@api';
import { Role, UserType } from './useAccessRights.constants';

const useAccessRights = () => {
  const [accessLevel, setAccessLevel] = useState(UserType.client);
  const { data } = useGetUserAccessRightsQuery();

  useEffect(() => {
    if (data?.getAccessLevel?.role === Role.companyAdmin) {
      if (data?.getAccessLevel?.ownerId === data?.getAccessLevel?.userid) {
        setAccessLevel(UserType.superAdmin);
      } else {
        setAccessLevel(UserType.admin);
      }
    }
  }, [data]);

  return { accessLevel };
};

export default useAccessRights;
