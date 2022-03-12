import React from 'react';

import { css, Global } from '@emotion/react';

const styles = css`
  body {
    height: 100vh;
  }
  #root {
    height: 100%;
  }
`;

const GlobalStyles: React.FC = () => {
  return <Global styles={styles} />;
};

export default GlobalStyles;
