import React from 'react';
import { Switch } from 'react-router';
import { BrowserRouter, Route } from 'react-router-dom';

import { AuthLayout, MainLayout } from '@layouts';
import { routes as authRoutes } from '@pages/auth-pages';
import { routes as dashboardRoutes } from '@pages/profile-pages';
import { PNF404 } from '@pages/profile-pages/404';
import { ChildRoutes } from './Router.types';

const childRoutes: ChildRoutes = (Layout, routes) =>
  routes.map(({ path, component: Component }) => (
    <Route
      key={path}
      path={`/${path}`}
      exact
      strict={false}
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  ));

const Router: React.FC = () => (
  <BrowserRouter>
    <Switch>
      {childRoutes(AuthLayout, authRoutes)}
      {childRoutes(MainLayout, dashboardRoutes)}
      <Route render={() => <PNF404 />} />
    </Switch>
  </BrowserRouter>
);

export default Router;
