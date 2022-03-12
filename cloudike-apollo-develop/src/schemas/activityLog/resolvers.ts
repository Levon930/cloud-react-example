import { IResolvers } from 'graphql-tools';
import { logsMapper } from './utils';
import { waitTask } from '../../utils';
import { LogType } from '../../dataloaders/accounts/request.types';

export const resolvers: IResolvers = {
  LogType,
  Query: {
    logs: async (
      _source,
      {
        input: {
          pagination: { page, itemsPerPage },
          filter,
        },
      },
      { dataSources }
    ) => {
      const skip = (page - 1) * itemsPerPage;

      const {
        data: { total },
      } = await dataSources.accountApi.getLogsTotal({
        not_include_storage_info: true,
        ...filter,
      });

      const logs = await dataSources.accountApi.getLogs({
        limit: itemsPerPage,
        not_include_storage_info: true,
        skip,
        ...filter,
      });

      return {
        logs: logsMapper(logs),
        totalItems: total,
      };
    },
    logFile: async (_source, { input = {} }, { dataSources }) => {
      const { filter = {} } = input;

      const { taskId } = await dataSources.accountApi.getLogFile({ ...filter });

      const url = await waitTask(taskId, dataSources);

      return { url };
    },
  },
};

export default resolvers;
