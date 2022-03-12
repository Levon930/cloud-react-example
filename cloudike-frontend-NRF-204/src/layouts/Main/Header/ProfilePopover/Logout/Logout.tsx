import React, { FC } from 'react';

import { LogoutIcon } from '@components/SvgComponents';
import { useAuth } from '@hooks';

import { Styled } from './Logout.styled';

/**
 * move to main layout
 */
const Logout: FC = () => {
  const { handleLogout } = useAuth();

  return (
    <Styled.LogoutButtonWrapper onClick={() => handleLogout()}>
      <LogoutIcon />
      Logout
    </Styled.LogoutButtonWrapper>
  );
};

export default Logout;
