import { ApolloServer } from 'apollo-server-express';
// import responseCachePlugin from 'apollo-server-plugin-response-cache';
// import { GraphQLRequestContext } from 'apollo-server-core';
import compression from 'compression';
import express from 'express';
import { createServer } from 'http';
import logger from 'morgan';

import { formatError } from './utils';
import { AccountAPI, NotificationAPI, StorageAPI } from './dataloaders';
import schema from './schema';

import { Config } from './config';
const config = Config.fromEnv();

const server = express();

// Middleware
server.use(express.json({ limit: '32mb' }));
server.use(express.urlencoded({ extended: true }));
server.use(compression(1));
server.use(logger('dev'));

// Production restrictions
const playground = config.isGqlPlaygroundEnabled && {
  settings: {
    'request.credentials': 'same-origin',
  },
};
// FIXME: remove stacktrace in errors

const apolloServer = new ApolloServer({
  schema,
  playground,
  introspection: config.isGqlPlaygroundEnabled,
  // FIXME: implement datasource
  dataSources: () => ({
    accountApi: new AccountAPI(),
    notificationApi: new NotificationAPI(),
    storageApi: new StorageAPI(),
  }),
  // formatResponse,
  formatError,
  tracing: true,
  stopOnTerminationSignals: true,
  // cacheControl: { defaultMaxAge: 5 }, // not sure that we need cache-control header, do we?
  plugins: [
    // define user by token and cache requests for each
    // not sure that we need server-side caching at all, do we need it?
    // responseCachePlugin({
    //   sessionId: (requestContext: GraphQLRequestContext) =>
    //     requestContext.request.http.headers.get('authorization') || null,
    // }),
  ],
  context: ({ req }) => {
    const token = req.headers.authorization;

    // FIXME: looks like we need to do it without dataLoader/dataSources
    // at least we need to try :)
    // retrieve a user with the token
    // const user = getUser(token);
    const user = { id: 1, name: 'the user 1' };

    // add the user and token to the context
    return { user, token };
  },
});

apolloServer.applyMiddleware({ app: server, path: '/graphql' });

const httpServer = createServer(server);
httpServer.listen({ port: config.port }, (): void => {
  console.log(`🔥 Cloudike GQL is running on ${config.port} port`);
  console.log(`Open playground: http://localhost:${config.port}/graphql`);
});

process.on('SIGTERM', () => {
  httpServer.close(() => {
    apolloServer.stop().finally(() => {
      console.log('HTTP server closed on SIGTERM');
      process.exit(0);
    });
  });
});
