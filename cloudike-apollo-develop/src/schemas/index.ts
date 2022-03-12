import 'graphql-import-node';

import * as typeDefs from './schema.graphql';
import * as Example from './example';
import * as Auth from './auth';
import * as CompanySettings from './companySettings';
import * as Team from './team';
import * as AccountSettings from './accountSettings';
import * as Shares from './shares';
import * as Notifications from './notifications';
import * as Documents from './documents';
import * as Favorites from './favorites';
import * as Trash from './trash';
import * as ActivityLog from './activityLog'

const BaseSchema = { typeDefs, resolvers: [] };

export {
  BaseSchema,
  Example,
  Auth,
  ActivityLog,
  CompanySettings,
  Team,
  AccountSettings,
  Shares,
  Documents,
  Favorites,
  Notifications,
  Trash,
};
