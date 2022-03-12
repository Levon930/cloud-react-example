import { IResolvers } from 'graphql-tools';
import { responseAdapter } from './adapters';

export const resolvers: IResolvers = {
  Query: {
    trash: async (_source, { input }, { dataSources }) => {
      const data = await dataSources.storageApi.trash(input);
      return {
        content: responseAdapter(data.content),
        isLastPage: data.is_last_page,
      };
    },
  },
};

export default resolvers;
