import { IResolvers } from 'graphql-tools';

export const resolvers: IResolvers = {
  Mutation: {
    updateAccountBasicSettings: async (_source, { input }, { dataSources }) => {
      const { code, description } = await dataSources.accountApi.changeProfile({
        userid: input.userId,
        name: input.name,
        alert_email: input.alertEmail,
        disable_alert: input.disableAlert,
        lang: input.lang,
      });
      return { code, description };
    },
    changePassword: async (_source, { newPassword }, { dataSources }) => {
      const { code, description } = await dataSources.accountApi.changeProfile({
        password: newPassword,
      });
      return { code, description };
    },
  },
};

export default resolvers;
