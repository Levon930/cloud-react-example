import { IResolvers } from 'graphql-tools';
import { documentsMapper, stableSort, getComparator } from './utils';

export const resolvers: IResolvers = {
  Query: {
    documents: async (
      _source,
      { input, pagination, sort },
      { dataSources }
    ) => {
      const data = await dataSources.storageApi.metadata({
        ...input,
      });
      data.content = stableSort(
        data.content,
        getComparator(sort.order, sort.orderBy)
      );
      data.itemsTotal = data.content.length;
      data.content = data.content.slice(
        pagination.page * pagination.itemsPerPage,
        pagination.page * pagination.itemsPerPage + pagination.itemsPerPage
      );
      data.input = input;
      return documentsMapper(data);
    },
  },
  DocumentContent: {
    __resolveType: (obj) => {
      switch (obj.folder) {
        case true:
          return 'DocumentFolder';
        case false:
          return 'DocumentFile';
        default:
          return ''; // Document?
      }
    },
  },
  Document: {
    __resolveType: (obj) => {
      switch (obj.folder) {
        case true:
          return 'DocumentFolder';
        case false:
          return 'DocumentFile';
        default:
          return ''; // Document?
      }
    },
  },
  Mutation: {
    // updateCompanyBasicSettings: async (_source, { input }, { dataSources }) => {
    //   try {
    //     const [
    //       { name },
    //       { domain },
    //     ] = await dataSources.accountApi.companySettingsChange(input);
    //     return { name, domain };
    //   } catch (e) {
    //     if (e.extensions.response.body) {
    //       switch (e.extensions.response.body.code) {
    //         case 'InvalidParameters':
    //           throw new Error(e);
    //       }
    //     }
    //     throw new Error('InternalServerError');
    //   }
    // },
    createFolder: async (_source, { input }, { dataSources }) => {
      return await dataSources.storageApi.createFolder(input);
    },
    downloadUrl: async (_source, { input }, { dataSources }) => {
      return await dataSources.storageApi.downloadUrl(input);
    },
    createFile: async (_source, { input }, { dataSources }) => {
      return await dataSources.storageApi.createFile(input);
    },
    multiDelete: async (_source, { input }, { dataSources }) => {
      return await Promise.all(
        input.paths.map((path) => {
          return dataSources.storageApi.multiDelete(path);
        })
      );
    },
    setFavorite: async (_source, { input }, { dataSources }) => {
      return await dataSources.storageApi.setFavorite(input);
    },
    renameFileOrFolder: async (_source, { input }, { dataSources }) => {
      return await dataSources.storageApi.renameFileOrFolder(input);
    },
    createPublicLink: async (_source, { input }, { dataSources }) => {
      const data = await dataSources.storageApi.createPublicLink(input);
      return { publicHash: data.public_hash };
    },
    deletePublicLink: async (_source, { input }, { dataSources }) => {
      return await dataSources.storageApi.deletePublicLink(input);
    },
    downloadArchive: async (_source, { input }, { dataSources }) => {
      return await dataSources.storageApi.downloadArchive(input);
    },
  },
};

export default resolvers;
