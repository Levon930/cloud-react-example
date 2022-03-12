import { IResolvers } from 'graphql-tools';
import { notificationsMapper } from './utils';

export const resolvers: IResolvers = {
  Query: {
    notifications: async (_source, { input }, { dataSources }) => {
      const dataNotifications = await dataSources.notificationApi.notifications(
        input.type
      );
      return notificationsMapper(dataNotifications);
    },
    // Todo finish development
    // viewNotifications: async (_source, { input }, { dataSources }) => {
    //   try {
    //     return await dataSources.notificationApi.viewNotifications(
    //       input.notice_hash
    //     );
    //   } catch (e) {
    //     throw new Error(e);
    //   }
    // },
  },
};

export default resolvers;
