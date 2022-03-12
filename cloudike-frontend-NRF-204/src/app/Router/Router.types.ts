export type RouteObject = {
  path: string;
  component: React.ComponentClass;
  exact?: boolean;
};

export type ChildRoutes = (
  Layout: React.FC,
  authPagesRoutes: Array<RouteObject>,
) => Array<React.ReactElement>;
