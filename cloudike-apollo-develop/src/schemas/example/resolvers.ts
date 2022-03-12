import { IResolvers } from 'graphql-tools';

export const resolvers: IResolvers = {
  Mutation: {
    createExample: async (_source, { id, name }) => {
      return { id, name };
    },
  },
  Query: {
    example: async (_source, { id }, { dataSources }) => {
      // This is example of using dataSource
      // Get argument `id` and pass to defined dataSource.api.method
      const { access_rights } = await dataSources.api.getShareInfo(id);

      return { id, name: access_rights };
    },
    examples: async () => {
      return [
        { id: 1, name: '' },
        { id: 2, name: '' },
      ];
    },
  },
  Example: {
    // resolve additional information in field (fetch relations, etc...)
    additional: async () => {
      return 'additional field';
    },
  },
};

export default resolvers;
