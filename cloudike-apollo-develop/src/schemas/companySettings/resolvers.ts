import { IResolvers } from 'graphql-tools';

export const resolvers: IResolvers = {
  Query: {
    companyBasicSettings: async (_source, { id }, { dataSources }) => {
      const [{ name }, { domain }] = await dataSources.accountApi.getCompany(
        id
      );
      return { name, domain };
    },
  },
  Mutation: {
    updateCompanyBasicSettings: async (_source, { input }, { dataSources }) => {
      const [{ name }, { domain }] =
        await dataSources.accountApi.companySettingsChange(input);
      return { name, domain };
    },
    changeAdministratorRights: async (_source, { input }, { dataSources }) => {
      try {
        for (let i = 0; i < input.length; i++) {
          await dataSources.accountApi.changeAdminRights({
            user_id: input[i].id,
            value: input[i].value,
          });
        }
        return { message: 'administrator rights changed' };
      } catch (e) {
        if (e.extensions.response.body) {
          switch (e.extensions.response.body.code) {
            case 'InvalidParameters':
              throw new Error(e);
          }
        }
        throw new Error('InternalServerError');
      }
    },
    companySuperAdministratorChange: async (
      _source,
      { id },
      { dataSources }
    ) => {
      try {
        const userInfo = await dataSources.accountApi.getUser();
        await dataSources.accountApi.companyAdminChange({
          user_id: id,
          company_id: userInfo.company_id,
        });
        return { message: 'company super administrator changed' };
      } catch (e) {
        if (e.extensions.response.body) {
          switch (e.extensions.response.body.code) {
            case 'InvalidParameters':
              throw new Error(e);
          }
        }
        throw new Error('InternalServerError');
      }
    },
  },
};

export default resolvers;
