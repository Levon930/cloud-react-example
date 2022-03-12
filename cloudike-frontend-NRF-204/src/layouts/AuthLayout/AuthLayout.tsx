import React from 'react';
import { Redirect } from 'react-router-dom';

import { LanguageSelect } from '@components';
import { useAuth } from '@hooks';
import { paths } from '@utils/routes/profile-routes';

import { AuthLayoutStyled } from './AuthLayout.styled';

const AuthLayout: React.FC = ({ children }) => {
  const { isAuthenticated } = useAuth();
  if (isAuthenticated) {
    return <Redirect to={paths.home} />;
  }

  return (
    <AuthLayoutStyled.AuthLayout>
      <AuthLayoutStyled.AuthHeader>
        <LanguageSelect />
      </AuthLayoutStyled.AuthHeader>
      {children}
      <AuthLayoutStyled.Footer>
        <AuthLayoutStyled.LeftSideFooter />
        <AuthLayoutStyled.RightSideFooter>© 2021 Cloudike, Inc.</AuthLayoutStyled.RightSideFooter>
      </AuthLayoutStyled.Footer>
    </AuthLayoutStyled.AuthLayout>
  );
};

export default AuthLayout;
