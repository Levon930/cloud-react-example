import { UserInputError } from 'apollo-server-core';
import { IResolvers } from 'graphql-tools';

export const resolvers: IResolvers = {
  Query: {
    getUser: async (_source, _, { dataSources }) => {
      return await dataSources.accountApi.getUser();
    },
    getPermissions: async (_source, _, { dataSources }) => {
      const data = await dataSources.accountApi.getUser();
      const permissions = {
        role: data.role,
        can_print: data.can_print,
        pc_can_download: data.pc_can_download,
        can_upload: data.can_upload,
        can_download: data.can_download,
      };
      return permissions;
    },
    getCompany: async (_source, { companyId }, { dataSources }) => {
      return await dataSources.accountApi.getCompany(companyId);
    },
    getAccessLevel: async (_source, _, { dataSources }) => {
      const data = await dataSources.accountApi.getUser();
      const company = await dataSources.accountApi.getCompany(data.company_id);
      return {
        role: data.role,
        userid: data.userid,
        ownerId: company.owner_id,
        companyId: data.company_id,
      };
    },

    usageStatistics: async (_source, _input, { dataSources }) => {
      const { quota_size, storage_size, company_id } =
        await dataSources.accountApi.getUser();

      const { traffic_size } = await dataSources.accountApi.getCompany(
        company_id
      );

      return {
        quota_size,
        storage_size,
        traffic_size: traffic_size,
      };
    },
  },
  Mutation: {
    createCompany: async (_source, { input }, { dataSources }) => {
      return await dataSources.accountApi.createCompany(input);
    },
    createUser: async (_source, { input }, { dataSources }) => {
      const { company_id } = await dataSources.accountApi.getUser();
      return await dataSources.accountApi.createUser({
        ...input,
        company_id,
      });
    },
    login: async (_source, { input }, { dataSources }) => {
      try {
        return await dataSources.accountApi.login({
          ...input,
          login: `email:${input.login}`,
        });
      } catch (e) {
        throw new UserInputError(e.extensions.response.body.code);
      }
    },
    logout: async (_source, _, { dataSources }) => {
      return await dataSources.accountApi.logout();
    },
    recoverLostPassword: async (_source, { login }, { dataSources }) => {
      return await dataSources.accountApi.recoverLostPassword(login);
    },
  },
};

export default resolvers;
