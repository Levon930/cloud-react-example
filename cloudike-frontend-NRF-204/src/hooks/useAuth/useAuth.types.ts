import { PartialPath } from 'history';

export interface useAuthReturnTypes {
  loading: boolean;
  handleLogin: (values: any) => void;
  isAuthenticated: boolean;
  handleLogout: (redirectTo?: PartialPath | string) => void;
}
