import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router';
import { PartialPath } from 'history';

import { useLoginMutation, useLogoutMutation } from '@api';
import { toaster } from '@helpers';
import { useAuthReturnTypes } from '@hooks/useAuth/useAuth.types';
import { paths } from '@utils/routes/profile-routes';
import { getToken, removeToken, setToken } from './useAuth.utils';

const useAuth = (): useAuthReturnTypes => {
  const history = useHistory();

  const [logoutMutation] = useLogoutMutation();
  const [loginMutation, { loading, client }] = useLoginMutation();

  const { t } = useTranslation('auth');

  const handleLogin = async (values: any) => {
    try {
      const val = await loginMutation({
        variables: values,
      });
      val.data?.login?.token && setToken(val.data.login.token);
      history.push(paths.home);
    } catch (e) {
      toaster(t('form.login.errorMessage'), 'error');
    }
  };

  const handleLogout = async (redirectTo?: PartialPath | string) => {
    try {
      await logoutMutation();
      removeToken();
      history.push(redirectTo || paths.home);
      client.cache.reset();
      client.clearStore();
    } catch (e) {
      toaster(t('form.logout.errorMessage'), 'error');
    }
  };

  const isAuthenticated = !!getToken();

  return { handleLogin, loading, isAuthenticated, handleLogout };
};

export default useAuth;
