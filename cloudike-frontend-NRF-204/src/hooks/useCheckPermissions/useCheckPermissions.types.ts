import { User } from '@api';

export type useCheckPermissionsProps = {
  showContent: boolean;
  loading: boolean;
  permissions:
    | Pick<User, 'can_print' | 'pc_can_download' | 'can_upload' | 'can_download' | 'role'>
    | undefined;
};
