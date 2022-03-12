import React from 'react';

import { Styled } from './SplashScreen.styled';

const SplashScreen: React.FC = () => (
  <Styled.Container>
    <Styled.SplashScreenContainer>
      <Styled.SplashScreenText>Loading...</Styled.SplashScreenText>
    </Styled.SplashScreenContainer>
  </Styled.Container>
);
export default SplashScreen;
