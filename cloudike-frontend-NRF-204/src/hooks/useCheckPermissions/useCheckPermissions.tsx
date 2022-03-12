import { useGetUserPermissionsQuery, UserRole } from '@api';
import { useCheckPermissionsProps } from './useCheckPermissions.types';
import { findRole } from './useCheckPermissions.utils';

const useCheckPermissions = (scope: UserRole[]): useCheckPermissionsProps => {
  const { data, loading } = useGetUserPermissionsQuery();
  const permissions = data?.getUser;
  let showContent = false;
  permissions?.role && (showContent = findRole(permissions.role, scope));

  return { loading, showContent, permissions };
};

export default useCheckPermissions;
