import React, { Suspense } from 'react';

import { SplashScreen, ToasterWrapper } from '@components';
import { AppWrapper } from './AppWrapper';
import Router from './Router';

const App: React.FC = () => {
  return (
    <Suspense fallback={SplashScreen}>
      <AppWrapper>
        <ToasterWrapper />
        <Router />
        <div id="modal-root" />
      </AppWrapper>
    </Suspense>
  );
};

export default App;
