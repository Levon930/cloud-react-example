import React from 'react';
import { Router } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import { StylesProvider, ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';

import { ThemeProvider } from '@emotion/react';
import { history, theme } from '@utils';
import { ApolloProvider } from './ApolloProvider';
import GlobalStyles from './GlobalStyles';

const AppWrapper: React.FC = ({ children }) => {
  return (
    <ApolloProvider>
      <Router history={history}>
        <StylesProvider injectFirst>
          <MuiThemeProvider theme={theme}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <GlobalStyles />
              {children}
            </ThemeProvider>
          </MuiThemeProvider>
        </StylesProvider>
      </Router>
    </ApolloProvider>
  );
};

export default AppWrapper;
