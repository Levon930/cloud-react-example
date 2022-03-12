import { IResolvers } from 'graphql-tools';
import {
  responseFavoritesAdapter,
  responseSetFavoriteAdapter,
  requestFavoritesAdapter,
} from './adapters';

const resolvers: IResolvers = {
  Query: {
    favorites: async (_source, { input }, { dataSources }) => {
      const data = await dataSources.storageApi.favorites(
        requestFavoritesAdapter(input)
      );

      return responseFavoritesAdapter(data);
    },
  },
  Mutation: {
    setFavorite: async (_source, { input }, { dataSources }) => {
      const data = await dataSources.storageApi.setFavorite(input.path);
      return responseSetFavoriteAdapter(data);
    },
  },
};

export default resolvers;
