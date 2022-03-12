import { paths } from '@utils/routes/auth-routes';
// FIXME resolve recursively dependencies
import { asyncLoading } from '../../app/Router/Async';

const Login = asyncLoading(() => import('./Login').then((module) => ({ default: module.Login })));
const Registration = asyncLoading(() =>
  import('./Registration').then((module) => ({ default: module.Registration })),
);
const ForgotPassword = asyncLoading(() => import('./ForgotPassword'));
const PublicLink = asyncLoading(() =>
  import('./PublicLink').then((module) => ({ default: module.PublicLink })),
);

export const routes = [
  { path: paths.login, component: Login },
  { path: paths.registration, component: Registration },
  { path: paths.forgotPassword, component: ForgotPassword },
  { path: paths.public, component: PublicLink },
];
