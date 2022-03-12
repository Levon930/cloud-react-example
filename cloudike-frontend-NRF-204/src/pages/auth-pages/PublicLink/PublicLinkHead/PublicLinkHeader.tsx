import React from 'react';
import { useHistory } from 'react-router';

import { paths } from '@utils/routes/auth-routes';
import usePublicLinkHeaderTranslation from './usePublicLinkHeaderTranslation';

import { Styled } from '../PublicLink.styled';

const PublicLinkHeader: React.FC = () => {
  const { headerAlt, signIn, signUp } = usePublicLinkHeaderTranslation();
  const history = useHistory();

  const handleSignIn = () => {
    history.push(paths.login);
  };

  const handleSignUp = () => {
    history.push(paths.registration);
  };

  return (
    <Styled.AppBar position="sticky" color="default">
      <Styled.Toolbar>
        <Styled.LogoWrapper px={2}>
          <img src="/assets/logo.png" alt={headerAlt} />
        </Styled.LogoWrapper>
        <div>
          <Styled.SignButton onClick={handleSignIn} trans>
            {signIn}
          </Styled.SignButton>
          <Styled.SignButton onClick={handleSignUp} trans={false}>
            {signUp}
          </Styled.SignButton>
        </div>
      </Styled.Toolbar>
    </Styled.AppBar>
  );
};

export default PublicLinkHeader;
