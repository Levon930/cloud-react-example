import { makeExecutableSchema } from 'graphql-tools';
import * as schemas from './schemas';
import { directiveResolvers } from './directives';

const executableSchema = Object.values(schemas).reduce(
  (builder, schema) => {
    builder.typeDefs = [...builder.typeDefs, schema.typeDefs];
    builder.resolvers = [...builder.resolvers, schema.resolvers];

    return builder;
  },
  {
    typeDefs: [],
    resolvers: [],
  }
);

export default makeExecutableSchema({
  ...executableSchema,
  directiveResolvers,
});
